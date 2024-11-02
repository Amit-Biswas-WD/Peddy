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

const phoneDetails = async (petId) => {
  // console.log(petId);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pet/${petId}`
  );
  const data = await res.json();
  console.log(data.petData);

  const {
    breed,
    category,
    date_of_birth,
    price,
    image,
    gender,
    pet_details,
    vaccinated_status,
    pet_name,
  } = data?.petData;

  const modalContainer = document.getElementById("modal-container");
  const div = document.createElement("div");
  modalContainer.innerHTML = `
  <dialog id="my_modal_1" class="modal" aria-label="Pet Details">
  <div class="modal-box">
    <img src="${image}" alt="${pet_name} picture" class="rounded-xl h-full w-full object-cover" />

    <div">
    <h2 class="text-lg font-semibold my-4">${pet_name}</h2>
    <div class="flex gap-4 items-center">

      <div>
        <div class="flex gap-2 items-center py-2">
          <img src="/image/readio.png" alt="Breed icon" class="w-4 h-4" />
          <p>Breed: ${breed}</p>
        </div>
        <div class="flex gap-2 items-center">
          <img src="/image/plus.png" alt="Gender icon" class="w-4 h-4" />
          <p>Gender: ${gender}</p>
        </div>
        <div class="flex gap-2 items-center">
          <img src="/image/plus.png" alt="Vaccination status icon" class="w-4 h-4" />
          <p>Vaccinated Status: ${vaccinated_status}</p>
        </div>
      </div>

      <div>
        <div class="flex gap-2 items-center py-2">
          <img src="/image/readio.png" alt="Birth icon" class="w-4 h-4" />
          <p>Birth: ${date_of_birth}</p>
        </div>
        <div class="flex gap-2 items-center py-2">
          <img src="/image/dolar.png" alt="Price icon" class="w-4 h-4" />
          <p>Price: ${price}</p>
        </div>
      </div>
    </div>

    <div class="my-4">
    <p class="my-4 text-lg font-semibold">Details Information</p>
    <p>${pet_details}</p>
    </div>

    <div class="modal-action">
      <form class="w-full" method="dialog">
        <button class="btn btn-outline btn-accent w-full">Close</button>
      </form>
    </div>

  </div>
  </div>

</dialog>

  `;
  modalContainer.appendChild(div);

  my_modal_1.showModal();
};

const loadCategoryCard = (category) => {
  // alert(category);
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then((res) => res.json())
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error));
};

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
