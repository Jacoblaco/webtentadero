document.addEventListener("DOMContentLoaded", () => {
    const carruselInner = document.querySelector(".carrusel-inner");
    
    // Duplicar imágenes para el bucle infinito
    carruselInner.innerHTML += carruselInner.innerHTML;

    let scrollPosition = 0;
    const scrollSpeed = 1; // Ajusta la velocidad del carrusel

    function moveCarousel() {
        scrollPosition += scrollSpeed;
        carruselInner.style.transform = `translateX(-${scrollPosition}px)`;

        // Si el primer grupo de imágenes ha desaparecido, reseteamos
        const firstImageWidth = carruselInner.firstElementChild.clientWidth;
        if (scrollPosition >= firstImageWidth * (carruselInner.children.length / 2)) {
            scrollPosition = 0;
            carruselInner.style.transform = `translateX(0)`;
        }

        requestAnimationFrame(moveCarousel);
    }

    moveCarousel();
});
