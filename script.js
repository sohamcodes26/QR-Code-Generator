function generateQRCode() {
    let url = document.getElementById("urlInput").value.trim();
    let qrDiv = document.getElementById("qrcode");
    let errorMsg = document.getElementById("error");
    let downloadBtn = document.getElementById("download");

    qrDiv.innerHTML = "";
    downloadBtn.style.display = "none";
    errorMsg.style.display = "none";

    if (!url) {
        errorMsg.style.display = "block";
        return;
    }

    new QRCode(qrDiv, {
        text: url,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });

    setTimeout(() => {
        let qrCanvas = qrDiv.querySelector("canvas");
        if (qrCanvas) {
            let qrImage = qrCanvas.toDataURL("image/png");
            downloadBtn.href = qrImage;
            downloadBtn.style.display = "block";
        }
    }, 100);
}