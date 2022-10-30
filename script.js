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

alertClose.addEventListener("click", () => {
  errorAlert.style.display = "none";
});



  // const scriptURL = 'https://script.google.com/macros/s/AKfycbyDFWJp-hR2ACpOzJ2MuOqiRNIRD2AbI8NArFhTcvGP3uwIYdPEeMEpfhx14_sMH6dO/exec'
  // const form = document.forms['Contact-us']

  // form.addEventListener('submit', e => {
  //   e.preventDefault()
  //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //     .then(response => console.log('Success!', response))
  //     .catch(error => console.error('Error!', error.message))
  // })
