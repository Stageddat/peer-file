import { peerApp } from "./peerHandler";

type Data = {
    file: Blob;
    fileName: string;
};

peerApp.on("connection", (conn) => {
    conn.on("data", (data: unknown) => {
        const typedData = data as Data;
        const link = document.createElement("a");
        link.href = URL.createObjectURL(new Blob([typedData.file]));
        link.download = typedData.fileName;
        link.textContent = `Download ${typedData.fileName}`;
        document.getElementById('messages')!.appendChild(link);
    });
});
