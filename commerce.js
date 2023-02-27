const closeBtn = document.getElementById("closeOrange");
const modal = document.getElementById("modalBg");
const displayItems = document.querySelectorAll("#overlay");
const displayCart = document.getElementById("cartDropdown");
const cart = document.getElementById("cart");
const nextBtn = document.getElementById("nex");
const prevBtn = document.getElementById("prev");
const mainImgPop = document.getElementById("mainImgPop");
const mainImg = document.getElementById("mainImg");
const thumbnails = document.querySelectorAll("#thumbnailss");
const overlay = document.getElementsByClassName("overlayy");
const preview = document.querySelectorAll(".highlight");

var currentIndex = 1;
var currentImg = 1;

closeBtn.addEventListener("click", closeModal);
prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);
displayItems.forEach((item) => item.addEventListener("click", openModal));
cart.addEventListener("click", toggleCart);

function closeModal() {
  modal.style.display = "none";
}

function openModal() {
  for (let i = 0; i < displayItems.length; i++) {
    modal.style.display = "block";
  }
}

function toggleCart() {
  console.log(displayItems);
  if (displayCart.style.display === "none") {
    displayCart.style.display = "block";
  } else {
    displayCart.style.display = "none";
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
}

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    // Code to open the pop modal here
    console.log("Pop modal opened");
  });
});

preview.forEach((highlight) => {
  highlight.addEventListener("click", () => {
    // Get the ID of the clicked highlight
    const idNo = highlight.id.slice(-1);
    // Set the src attribute of the mainImg element based on the ID
    mainImgPop.src = `./images/product${idNo}.jpg`;
  });
});
