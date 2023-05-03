function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function checkingValue(inputRef) {
  return (
    inputRef.value >= +inputRef.getAttribute("min") &&
    inputRef.value <= +inputRef.getAttribute("max")
  );
}

function createBoxes(amount) {
  let sizes = 30;
  const array = [];

  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement("div");
    element.style.backgroundColor = getRandomHexColor();
    element.style.width = `${sizes}px`;
    element.style.height = `${sizes}px`;

    sizes += 10;
    array.push(element);
  }

  return array;
}

function createCollectionHandler(event) {
  if (checkingValue(inputValueRef)) {
    if (divBoxRef.innerHTML === "") {
      divBoxRef.append(...createBoxes(inputValueRef.value));
    } else {
      alert("Please destroy the previous collection before creating a new one");
    }
  } else {
    alert("Please enter a number from 1 to 100");
  }
}

function destroyCollectionHandler(event) {
  divBoxRef.innerHTML = "";
  inputValueRef.value = "";
}

const divBoxRef = document.querySelector("#boxes");
const controlsRef = document.querySelector("#controls");
const inputValueRef = controlsRef.children[0];
const createCollectionBtn = controlsRef.children[1];
const destroyCollectionBtn = controlsRef.children[2];

createCollectionBtn.addEventListener("click", createCollectionHandler);
destroyCollectionBtn.addEventListener("click", destroyCollectionHandler);
