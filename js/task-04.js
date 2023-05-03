const counterWrapperRef = document.querySelector("#counter");
const counterValueRef = counterWrapperRef.querySelector("#value");
const incrementBtnRef = counterWrapperRef.querySelector(
  '[data-action="increment"]'
);
const decrementBtnRef = counterWrapperRef.querySelector(
  '[data-action="decrement"]'
);

let counterValue = 0;
counterValueRef.textContent = counterValue;

function incrementBtnHandler() {
  counterValue++;
  counterValueRef.textContent = counterValue;
}
function decrementBtnHandler() {
  counterValue--;
  counterValueRef.textContent = counterValue;
}

incrementBtnRef.addEventListener("click", incrementBtnHandler);
decrementBtnRef.addEventListener("click", decrementBtnHandler);
