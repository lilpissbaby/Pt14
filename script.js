const audios = document.querySelectorAll('audio');

audios.forEach((audio, index) => {
  audio.addEventListener('ended', () => {
    const nextIndex = (index + 1) % audios.length;
    audios[nextIndex].play();
  });
});

const images = document.querySelectorAll('.galeria img');
document.getElementById('zoom-in').addEventListener('click', () => {
  images.forEach(img => img.style.transform = 'scale(1.2)');
});
document.getElementById('zoom-out').addEventListener('click', () => {
  images.forEach(img => img.style.transform = 'scale(1)');
});