// Handle Form Submission
const form = document.querySelector(".contact-us___form");
const errorAlert = document.querySelector(".contact-us__form-alert");
const alertClose = document.querySelector(".contact-us__form-alert-close");

form.addEventListener("submit", (e) => {
  // Validate Inputs
  let hasError = false;

  document.querySelectorAll(".contact-us__form-input").forEach((input) => {
    if (input.value == "" && input.getAttribute("name") != "phone") {
      hasError = true;
    }
  });

  if (document.querySelector(".contact-us__form-textarea").value == "") {
    hasError = true;
  }

  if (hasError) {
    e.preventDefault();
    errorAlert.style.display = "flex";
    errorAlert.scrollIntoView({ block: "center" });
  } else {
    errorAlert.style.display = "none";
  }
});

// alertClose.addEventListener("click", () => {
//   errorAlert.style.display = "none";
// });

// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
// });

// document.addEventListener("keydown", function (e) {
//   if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
//     e.preventDefault();
//   }
// });
document.addEventListener('DOMContentLoaded', function () {
  var video = document.querySelector('.backvideo');
  video.muted = true;
  video.play();
});