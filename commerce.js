const close = document.getElementById("closeOrange");
const modal = document.getElementsByClassName("modalBg")[0];
const displayItems = document.getElementById("overlay");
const displayCart = document.getElementById("cartDropdown");
const cart = document.getElementById("cart");
const nextBtn = document.getElementById("nex");
const prevBtn = document.getElementById("prev");
// const highlight = document.querySelectorAll("highlight");
const mainImgPop = document.getElementById("mainImgPop");
const thumbnailss = document.querySelectorAll(".highlight");
// const prev = document.getElementById("prev");
// const next = document.getElementById("nex");

//  var displayItems = document.querySelectorAll('.highlight').forEach( => {
//     document.querySelector('madalBg').style.display = 'block'
// })

const amountValue = 0;
let currentIndex = 0;

closeOrange.addEventListener("click", closeModal);

prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);
displayItems.addEventListener("click", openModal);
cart.addEventListener("click", toggleCart);
// .addEventListener("click", nextImage);
// .addEventListener("click", prevImage);
// prev.addEventListener("click", prevImage);
// nex.addEventListener("click", nextImage);
function closeModal() {
  modal.style.display = "none";
}

function openModal() {
  modal.style.display = "block";
}

function toggleCart() {
  if (cartDropdown.style.display === "none") {
    cartDropdown.style.display = "block";
  } else {
    cartDropdown.style.display = "none";
  }
}

function showImage(currentIndex) {
  mainImgPop.src = `./images/image-product${currentIndex}.jpg`;
}

function showNextImage() {
  currentIndex++;
  if (currentIndex >= thumbnailss.length) {
    currentIndex = 0;
  }
  showImage(mainImgPop);
  mainImgPop.src = `./images/image-product${currentIndex}.jpg`;
}

function showPrevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = thumbnailss.length - 1;
  }
  showImage(mainImgPop);
  mainImgPop.src = `./images/image-product${currentIndex}.jpg`;
}
// function prevImage() {
//   const currentIndex = Array.from(thumbnailss).findIndex((img) =>
//     img.classList.contains("active")
//   );
//   if (currentIndex === 0) {
//     thumbnailss[thumbnailss.length - 1].classList.add("active");
//   } else {
//     thumbnailss[currentIndex - 1].classList.add("active");
//   }
//   thumbnailss[currentIndex].classList.remove("active");
//   mainImgPop.src = thumbnailss[currentIndex].src.replace("-thumbnail", "");
// }

// display next image
// function nextImage() {
//   const currentIndex = Array.from(thumbnailss).findIndex((img) =>
//     img.classList.contains("active")
//   );
//   if (currentIndex === thumbnailss.length - 1) {
//     thumbnailss[0].classList.add("active");
//   } else {
//     thumbnailss[currentIndex + 1].classList.add("active");
//   }
//   thumbnailss[currentIndex].classList.remove("active");
//   mainImgPop.src = thumbnailss[currentIndex].src.replace("-thumbnail", "");
// }

// add event listeners
// thumbnailss.forEach((thumbnail) => {
//   thumbnail.addEventListener("click", () => {
//     thumbnailss.forEach((thumb) => thumb.classList.remove("active"));
//     thumbnail.classList.add("active");
//     mainImgPop.src = thumbnail.src.replace("-thumbnail", "");
//   });
// });

// close.addEventListener('click', closeModal);
// cart.addEventListener('click', toggleCart);
// avatar.addEventListener('click', toggleCart);
// checkout.addEventListener('click', closeModal);
