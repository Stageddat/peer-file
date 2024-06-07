import { peerApp } from "./peerHandler";

export async function getPeerID() {
    return new Promise((resolve, reject) => {
        peerApp.on("open", (id) => {
            console.log(id);
            resolve(id);
        });
    });
}
