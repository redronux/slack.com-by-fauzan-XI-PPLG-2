  // Autoplay video on hover, pause on mouseleave, and enlarge card
  document.querySelectorAll('.customer-video-card').forEach(card => {
    const video = card.querySelector('video');
    card.addEventListener('mouseenter', () => {
      card.classList.add('active');
      if(video) {
        video.play();
      }
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('active');
      if(video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  });

