document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  toggleButton.addEventListener("click", function () {
    if (this.textContent === "Dejar de ver requisitos") {
      this.textContent = "Ver requisitos";
    } else {
      this.textContent = "Dejar de ver requisitos";
    }
  });
});
