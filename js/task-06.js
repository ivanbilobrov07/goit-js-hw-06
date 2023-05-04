const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (event) => {
  event.currentTarget.classList.remove("valid", "invalid");
  if (
    event.currentTarget.value.length >=
    event.currentTarget.getAttribute("data-length")
  ) {
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.add("invalid");
  }
});
