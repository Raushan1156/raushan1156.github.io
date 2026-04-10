const texts = [
  "Java + Spring Boot Developer",
  "DevOps-integrated backend engineer",
  "Automation engineer",
  "Continuous Learner"
];

let index = 0;
let charIndex = 0;
const speed = 80;
const pause = 1200;

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typing-text");
  if (!el) return;

  function type() {
    if (charIndex < texts[index].length) {
      el.textContent += texts[index].charAt(charIndex++);
      setTimeout(type, speed);
    } else {
      setTimeout(erase, pause);
    }
  }

  function erase() {
    if (charIndex > 0) {
      el.textContent = texts[index].substring(0, --charIndex);
      setTimeout(erase, speed / 2);
    } else {
      index = (index + 1) % texts.length;
      setTimeout(type, speed);
    }
  }

  type();
});

// ===== SCROLL FADE-IN OBSERVER =====
const fadeEls = document.querySelectorAll(
  '.section, .project-card, .exp-card, .skill-group, .arch-node'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // stagger delay for arch nodes
      const delay = entry.target.classList.contains('arch-node') ? i * 80 : 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});
