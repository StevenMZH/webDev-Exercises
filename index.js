document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".QA-section button").forEach((button) => {
    button.addEventListener("click", function () {
      const answerSection =
        this.closest(".QA-section").querySelector(".answer-section");
      const plusIcon = this.querySelector(".plus-icon");
      const minusIcon = this.querySelector(".minus-icon");

      answerSection.style.display =
        answerSection.style.display === "none" || !answerSection.style.display
          ? "block"
          : "none";

      plusIcon.style.display =
        answerSection.style.display === "none" ? "block" : "none";
      minusIcon.style.display =
        answerSection.style.display === "none" ? "none" : "block";
    });
  });
});
