const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const arrayOfIngredientItems = ingredients.map((value) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = value;
  ingredientItem.classList.add("item");

  return ingredientItem;
});

listRef.append(...arrayOfIngredientItems);
