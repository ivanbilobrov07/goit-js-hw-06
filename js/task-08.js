const formRef = document.querySelector(".login-form");
const inputsRef = formRef.elements;
let elementsOfForm = {};

formRef.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.target;

  if (email.value === "" || password.value === "") {
    alert("Please fill all the fields");
  } else {
    elementsOfForm.email = email.value;
    elementsOfForm.password = password.value;

    console.log(elementsOfForm);
    event.target.reset();
  }
});
