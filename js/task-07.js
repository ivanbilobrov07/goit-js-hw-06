const inputFSControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.style.fontSize = `${inputFSControlRef.value}px`;

inputFSControlRef.addEventListener("input", (event) => {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
});
