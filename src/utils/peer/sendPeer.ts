import { peerApp } from "./peerHandler";

export async function sendPeer(requestPeerID: string, fileInput: HTMLInputElement) {
    const peerId = requestPeerID;
    const conn = peerApp.connect(peerId);

    conn.on("open", () => {
        const file = fileInput.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const target = e.target;
                if (target && target.result) {
                    conn.send({ file: target.result, fileName: file.name });
                    console.log(`File ${file.name} sent to ${peerId}`);
                } else {
                    console.error("Failed to read file");
                }
            };
            reader.readAsArrayBuffer(file);
        } else {
            console.error("Please select a file first");
        }
    });
}
