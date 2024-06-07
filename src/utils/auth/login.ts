import { auth } from "../firebaseHandler"
import { signInWithEmailAndPassword } from 'firebase/auth';

export async function login(email: string, password: string) {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const idToken = await userCredential.user.getIdToken();
        const response = await fetch(
            "https://share-peer-server-prod.vercel.app/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${idToken}`,
                },
                credentials: "include",
                body: JSON.stringify({ email }),
            }
        );

        const data = await response.json();
        console.log(data);
        if (data.message === "Login successful") {
            window.localStorage.setItem("TOKEN", data.token);
        }
    }

    catch (error) {
        console.error("Error logging in:", error);
    }
}
