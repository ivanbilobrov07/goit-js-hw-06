const listRef = document.querySelector("#categories");
const arrayOfItems = listRef.querySelectorAll(".item");
const numberOfCategories = arrayOfItems.length;

console.log("Number of categories:", numberOfCategories);
console.log("\n");

arrayOfItems.forEach((value) => {
  const titleText = value.firstElementChild.textContent;
  const numberOfInnerListItems = value.lastElementChild.children.length;

  console.log("Category:", titleText);
  console.log("Elements:", numberOfInnerListItems);
  console.log("\n");
});
