function takePhoto() {
    if (!('ImageCapture' in window)) {
        alert('ImageCapture não está disponível neste navegador.');
        return;
    }

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            const imageCapturer = new ImageCapture(stream.getVideoTracks()[0]);
            return imageCapturer.takePhoto();
        })
        .then(blob => {
            const imageTag = document.getElementById("imageTag");
            imageTag.src = URL.createObjectURL(blob);
        })
        .catch(err => alert('Erro ao capturar a foto: ' + err));
}
