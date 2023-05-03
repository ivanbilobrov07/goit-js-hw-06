const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (event) => {
  event.target.classList.remove("valid", "invalid");
  if (event.target.value.length >= event.target.getAttribute("data-length")) {
    event.target.classList.add("valid");
  } else {
    event.target.classList.add("invalid");
  }
});
