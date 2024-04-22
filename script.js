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
        .catch(err => {
            console.error('Erro ao capturar a foto:', err);
            if (err.name === 'NotAllowedError') {
                alert('Permissão para acessar a câmera não concedida.');
            } else if (err.name === 'NotFoundError' || err.name === 'OverconstrainedError') {
                alert('Não foi possível encontrar ou inicializar a câmera.');
            } else {
                alert('Erro ao capturar a foto: ' + err.message);
            }
        });
}


document.addEventListener("DOMContentLoaded", function() {
    loadAbrigos();
});

function loadAbrigos() {
    fetch("abrigos.json")
    .then(response => response.json())
    .then(data => {
        const casesContainer = document.querySelector(".row-sidepage");
        casesContainer.innerHTML = ""; // Limpa a lista

        data.forEach(caseItem => {
            const div = document.createElement("div");
            div.className = "post-abrigo";
            div.innerHTML = `<section class="box-abrigo">
                <a href="#" class="box-image"><img src="${caseItem.fotoAbrigo}" alt="" /></a>
                <div class="box-content">
                    <h2>${caseItem.nome}</h2>
                    <h3><i class="fas fa-map-marker-alt"></i>${caseItem.distancia}</h3>
                    <h4>${caseItem.status}</h4>
                    <button>
                        <i class="fab fa-whatsapp"></i>
                        <a href="https://api.whatsapp.com/send?phone=15551234567">Whatsapp</a>
                    </button>
                </div>
            </section>`;
            casesContainer.appendChild(div);
        });
    })
    .catch(error => {
        console.error("Erro ao carregar casos:", error);
    });
}






  