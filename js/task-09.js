function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeBackgroundBtnClick(event) {
  const color = getRandomHexColor();

  bodyRef.style.backgroundColor = color;
  textOfColorRef.textContent = color;
}

const bodyRef = document.body;
const widgetWrapperRef = document.querySelector(".widget");
const textOfColorRef = widgetWrapperRef.querySelector(".color");
const changeBackgroundBtn = widgetWrapperRef.querySelector(".change-color");

changeBackgroundBtn.addEventListener("click", onChangeBackgroundBtnClick);
