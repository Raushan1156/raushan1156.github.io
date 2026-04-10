// MO.JS BURST
const burst = new mojs.Burst({
  radius: { 0: 80 },
  count: 6,
  children: {
    shape: 'circle',
    fill: { 'cyan': 'yellow' },
    duration: 800
  }
});

// Attach to buttons/icons only
document.querySelectorAll('.contact-item, .social-icon, .btn').forEach(el => {
  el.addEventListener('click', (e) => {
    burst.tune({ x: e.pageX, y: e.pageY }).replay();
  });
});


// WALKWAY (for SVG logo)
window.addEventListener('load', () => {
  if (document.querySelector('#logo')) {
    const svg = new Walkway({
      selector: '#logo',
      duration: 2000,
      easing: 'easeInOutCubic'
    });
    svg.draw();
  }
});