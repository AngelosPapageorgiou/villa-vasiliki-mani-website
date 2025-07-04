const images = document.querySelectorAll('#gallery .gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    openLightbox();
  });
});

function openLightbox() {
  lightbox.style.display = 'flex'; // δείξε το lightbox (στο CSS έχει flexbox ρύθμιση)
  lightboxImage.src = images[currentIndex].src;
  lightboxImage.alt = images[currentIndex].alt;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImage.src = images[currentIndex].src;
  lightboxImage.alt = images[currentIndex].alt;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImage.src = images[currentIndex].src;
  lightboxImage.alt = images[currentIndex].alt;
}

// Close lightbox clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});
