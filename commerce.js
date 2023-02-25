const closeBtn = document.getElementById("closeOrange");
const modal = document.getElementsByClassName("modalBg")[0];
const displayItems = document.getElementById("overlay");
const displayCart = document.getElementById("cartDropdown");
const cart = document.getElementById("cart");
const nextBtn = document.getElementById("nex");
const prevBtn = document.getElementById("prev");
const mainImgPop = document.getElementById("mainImgPop");
// const mainImgPop = document.querySelectorAll(".imageDisplay");

var currentIndex = 1;

closeBtn.addEventListener("click", closeModal);
prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);
displayItems.addEventListener("click", openModal);
cart.addEventListener("click", toggleCart);

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

function showPrevImage() {
  if (currentIndex === 1) {
    currentIndex = 4;
  } else {
    currentIndex--;
  }
  mainImgPop.src = `./images/product${currentIndex}.jpg`;
}

function showNextImage() {
  if (currentIndex == 4) {
    currentIndex = 1;
  } else {
    currentIndex++;
  }
  mainImgPop.src = `./images/product${currentIndex}.jpg`;
  console.log(mainImgPop);
}
