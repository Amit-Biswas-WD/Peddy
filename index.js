const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories))
    .catch((error) => console.log(error));
};

const loadCard = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/category/dog")
    .then((res) => res.json())
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error));
};

const displayCategory = (category) => {
  const categoryContainer = document.getElementById("display-categories");
  category.forEach((item) => {
    console.log(item);
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `<div>
    
    <button id="${item.id}" class="btn btn-outline btn-accent w-60 h-16 gap-8"><img id="${item.id}"
      src=${item.category_icon}
      class="w-10"
      alt="Shoes" />${item.category}</button>
    </div>`;
    categoryContainer.append(buttonContainer);
  });
};

loadCard();
loadCategory();
