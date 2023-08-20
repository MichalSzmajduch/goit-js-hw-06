const categories = document.querySelector(".item");
console.log(categories);
const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
const numberOfCategories = categoryItems.length;
console.log(`Number of categories: ${numberOfCategories}`);
categoryItems.forEach((categoryItem) => {
  const categoryHeader = categoryItem.querySelector("h2");
  const categoryElements = categoryItem.querySelectorAll("li");
  console.log(`Category: ${categoryHeader.textContent}`);
  console.log(`Elements: ${categoryElements.length}`);
});
