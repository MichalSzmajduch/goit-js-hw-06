const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const ulGallery = document.querySelector(".gallery");

const galleryHTML = images
  .map(
    (image) => `
  <li class="gallery-item">
    <img src="${image.url}" alt="${image.alt}">
  </li>
`
  )
  .join("");

ulGallery.insertAdjacentHTML("beforeend", galleryHTML);
const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach((item) => {
  item.style.display = "flex";
  item.style.maxwidth = "200px";
  item.style.height = "200px";
});
ulGallery.style.display = "flex";
ulGallery.style.flexdirection = "row";
ulGallery.style.gap = "10px";
