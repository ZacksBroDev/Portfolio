document.querySelectorAll(".toggle-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const index = parseInt(this.getAttribute("data-index"));
    const details = document.querySelectorAll(".content-container .details");
    // Hide all details first
    details.forEach((d) => (d.style.display = "none"));
    // Show the selected details
    if (details[index]) {
      details[index].style.display = "block";
    }
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    setTimeout(() => {
      this.reset();
    }, 1);
  });
