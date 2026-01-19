const texts = [
  "Java Developer",
  "Spring Boot Enthusiast",
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
