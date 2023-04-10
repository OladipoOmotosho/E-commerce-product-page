// This code creates variables and assigns DOM elements to them
const closeBtn = document.getElementById("closeOrange");
const modal = document.getElementById("modalBg");
const displayItems = document.querySelectorAll("#overlay");
const displayCart = document.getElementById("cartDropdown");
const cart = document.getElementById("cart");
const nextBtn = document.getElementById("nex");
const prevBtn = document.getElementById("prev");
const nextBtnn = document.getElementById("nextBtn");
const prevBtnn = document.getElementById("prevBtn");
const mainImgPop = document.getElementById("mainImgPop");
const mainImg = document.getElementById("mainImg");
const thumbnails = document.querySelectorAll("#thumbnailss");
const overlay = document.getElementsByClassName("overlayy");
const preview = document.querySelectorAll(".highlight");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const quantity = document.getElementById("quantity");
// These variables keep track of the current state of the image carousel
var currentIndex = 1;
var currentImg = 1;

// These functions are event handlers that respond to user interactions
closeBtn.addEventListener("click", closeModal);
prevBtn.addEventListener("click", showPrevImage);
prevBtnn.addEventListener("touchend", showPrevImageMobile);
nextBtn.addEventListener("click", showNextImage);
nextBtnn.addEventListener("touchend", showNextImageMobile);
displayItems.forEach((item) => item.addEventListener("click", openModal));
cart.addEventListener("click", toggleCart);

// Reduce the opacity of the minus button when the value is equal to zero
if (parseInt(quantity.textContent) === 0) {
  minusBtn.style.opacity = 0.5;
}

plusBtn.addEventListener("click", () => {
  // Increase the value of the zero element by 1
  quantity.textContent = parseInt(quantity.textContent) + 1;

  if (parseInt(quantity.textContent) > 0) {
    minusBtn.style.opacity = 1;
  }
});

minusBtn.addEventListener("click", () => {
  // Decrease the value of the zero element by 1, but not below 0
  const currentValue = parseInt(quantity.textContent);

  if (currentValue > 0) {
    quantity.textContent = currentValue - 1;
  } else if (currentValue === 0) {
    minusBtn.style.opacity = 0.5;
  }
});

// This function hides the modal when called
function closeModal() {
  modal.style.display = "none";
}

// This function shows the modal when called
function openModal() {
  for (let i = 0; i < displayItems.length; i++) {
    modal.style.display = "block";
  }
}

// This function shows or hides the cart dropdown when called
function toggleCart() {
  if (displayCart.style.display === "none") {
    displayCart.style.display = "block";
  } else {
    displayCart.style.display = "none";
  }
}

// This function displays the previous image in the carousel
function showPrevImage() {
  if (currentIndex === 1) {
    currentIndex = 4;
  } else {
    currentIndex--;
  }
  mainImgPop.src = `./images/product${currentIndex}.jpg`;
}

function showPrevImageMobile() {
  if (currentIndex === 1) {
    currentIndex = 4;
  } else {
    currentIndex--;
  }
  mainImg.src = `./images/product${currentIndex}.jpg`;
}

// This function displays the next image in the carousel
function showNextImage() {
  if (currentIndex == 4) {
    currentIndex = 1;
  } else {
    currentIndex++;
  }
  mainImgPop.src = `./images/product${currentIndex}.jpg`;
}

function showNextImageMobile() {
  if (currentIndex == 4) {
    currentIndex = 1;
  } else {
    currentIndex++;
  }
  mainImg.src = `./images/product${currentIndex}.jpg`;
}

// This code adds click event listeners to each preview image
preview.forEach((highlight) => {
  highlight.addEventListener("click", () => {
    // Get the ID of the clicked highlight
    const idNo = highlight.id.slice(-1);
    // Set the src attribute of the mainImg element based on the ID
    mainImgPop.src = `./images/product${idNo}.jpg`;
  });
});

// button click now  working
