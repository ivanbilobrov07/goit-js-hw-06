const nameOutputRef = document.querySelector("#name-output");
const nameInputRef = document.querySelector("#name-input");

nameInputRef.addEventListener("input", (event) => {
  nameOutputRef.textContent =
    event.target.value === "" ? "Anonymous" : event.target.value;
});
