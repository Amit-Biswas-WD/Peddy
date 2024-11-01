const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories))
    .catch((error) => console.log(error));
};

const loadCard = () => {
  fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then((res) => res.json())
    .then((data) => cardCategory(data.pets))
    .catch((error) => console.log(error));
};

const phoneDetails = (petId) => {
  // console.log(petId);
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    .then((res) => res.json())
    .then((data) => console.log(data.petData))
    .catch((error) => console.log(error));
};

const loadCategoryCard = (category) => {
  // alert(category);
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then((res) => res.json())
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error));
};

const cardDetails = () => {};

const cardCategory = (pets) => {
  const cardContainer = document.getElementById("card");
  pets.forEach((item) => {
    console.log(item);
    const card = document.createElement("div");
    card.classList = "border border-gray-300 rounded-xl p-2 shadow-lg";
    card.innerHTML = `
  <figure class="px-4 pt-4 h-[200px]">
    <img
      src=${item.image}
      alt="Shoes"
      class="rounded-xl h-full w-full object-cover" />
  </figure>
  <div class="p-4">
  <div>
  <h2 class="py-2 text-xl font-bold">${item.pet_name}</h2>
  <div class="flex gap-2 items-center"><img
      src="/image/windows.png"
      alt="Shoes"
      class="w-4 h-4" />
      <p>Breed: ${item.breed}</p>
  </div>
  <div class="flex gap-2 items-center py-2"><img
      src="/image/readio.png"
      alt="Shoes"
      class="w-4 h-4" />
      <p>Birth: ${item.date_of_birth}</p>
  </div>
  <div class="flex gap-2 items-center"><img
      src="/image/plus.png"
      alt="Shoes"
      class="w-4 h-4" />
      <p>Gender: ${item.gender}</p>
  </div>
  <div class="flex gap-2 items-center py-2"><img
      src="/image/dolar.png"
      alt="Shoes"
      class="w-4 h-4" />
      <p>Price: ${item.price}</p>
  </div>
  <div class="flex justify-between gap-2 items-center py-2">
  <button class="btn btn-outline btn-accent"><img
      src="/image/like.png"
      alt="Shoes"
      class="w-4 h-4" /></button>
  <button class="btn btn-outline btn-accent">Adopt</button>
  <button onclick="phoneDetails('${item.petId}')" class="btn btn-outline btn-accent">Details</button>
  </div>
  </div>`;
    cardContainer.append(card);
  });
};

const displayCategory = (category) => {
  const categoryContainer = document.getElementById("display-categories");
  category.forEach((item) => {
    console.log(item);
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `<div>
    
    <button 
    onclick="loadCategoryCard('${item.category}')"
     id="${item.id}" class="btn btn-outline btn-accent w-60 h-16 gap-8"><img id="${item.category}"
      src=${item.category_icon}
      class="w-10"
      alt="Shoes" />${item.category}</button>
    </div>`;
    categoryContainer.append(buttonContainer);
  });
};

loadCard();
loadCategory();
