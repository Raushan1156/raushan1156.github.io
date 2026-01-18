document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".read-more-btn").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".expandable");
      if (!card) return;

      card.classList.toggle("expanded");

      button.textContent = card.classList.contains("expanded")
        ? "Read less"
        : "Read more";
    });
  });
});
