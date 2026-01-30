document.querySelectorAll('.project-card').forEach(card => {
  const video = card.querySelector('video');

  card.addEventListener('mouseenter', () => {
    video.play();
    video.style.filter = "grayscale(0)";
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
    video.style.filter = "grayscale(100%)";
  });
});
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // stop page refresh

  // show thank you message
  document.getElementById('thankYouMsg').style.display = 'block';

  // optional: clear inputs
  this.reset();
});
/* Project Media Gallery Animation */

gsap.from(".project-media-section .image-box", {
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.12,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".project-media-section",
    start: "top 75%"
  }
});

gsap.from(".project-media-section .video-box", {
  opacity: 0,
  x: 40,
  duration: 1,
  ease: "power2.out",
  delay: 0.3,
  scrollTrigger: {
    trigger: ".project-media-section",
    start: "top 75%"
  }
});
