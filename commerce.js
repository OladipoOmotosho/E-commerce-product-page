const closeBtn = document.getElementById("closeOrange");
const modal = document.getElementById("modalBg");
const displayItems = document.getElementById("overlay");
const displayCart = document.getElementById("cartDropdown");
const cart = document.getElementById("cart");
const nextBtn = document.getElementById("nex");
const prevBtn = document.getElementById("prev");
const mainImgPop = document.getElementById("mainImgPop");
const thumbnail = document.querySelectorAll("#thumbnailss");
const overlay = document.getElementsByClassName("overlayy");
// const preview = document.getElementById("highlight");
const highlight1 = document.getElementById("#highlight1");
const highlight2 = document.getElementById("#highlight2");
const highlight3 = document.getElementById("#highlight3");
const highlight4 = document.getElementById("#highlight4");

var currentIndex = 1;

closeBtn.addEventListener("click", closeModal);
prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);
displayItems.addEventListener("click", openModal);
cart.addEventListener("click", toggleCart);
// preview.addEventListener("click", selectedImg);

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
  // console.log(mainImgPop);
}

highlight1.addEventListener("click", () => {
  mainImgPop.src = "./images/product1.jpg";
});

highlight2.addEventListener("click", () => {
  mainImgPop.src = "./images/product2.jpg";
});

highlight3.addEventListener("click", () => {
  mainImgPop.src = "./images/product3.jpg";
});

highlight4.addEventListener("click", () => {
  mainImgPop.src = "./images/product4.jpg";
});

// function selectedImg() {
//   mainImgPop.src = thumbnail[`${currentIndex}`];
//   console.log(thumbnail);
// }
