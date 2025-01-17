let currentImageIndex = 0;
let images = [];

function openLightbox(imageSrc) {
    images = document.querySelectorAll('.btn-image');
    currentImageIndex = Array.from(images).findIndex(image => image.src.includes(imageSrc));

    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-image').src = imageSrc;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction, event) {
    event.preventDefault();
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    if (currentImageIndex >= images.length) currentImageIndex = 0;

    const newImageSrc = images[currentImageIndex].src;
    document.getElementById('lightbox-image').src = newImageSrc;
}
