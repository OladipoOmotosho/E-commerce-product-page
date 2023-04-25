// This code creates variables and assigns DOM elements to them
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
const nextBtnn = document.getElementById("nextBtn");
const prevBtnn = document.getElementById("prevBtn");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const quantity = document.getElementById("quantity");
const itemsInCart = document.getElementById("noOfCartItems");
const cartDetails = document.getElementsByClassName("cartDetails");
const addToCart = document.getElementById("cartbtn");
// These variables keep track of the current state of the image carousel
var currentIndex = 1;
var currentImg = 1;

itemsInCart.textContent = 0;

// These functions are event handlers that respond to user interactions
closeBtn.addEventListener("click", closeModal);
prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);
displayItems.forEach((item) => item.addEventListener("click", openModal));
cart.addEventListener("click", toggleCart);
nextBtnn.addEventListener("touchend", showNextImageMobile);
prevBtnn.addEventListener("touchend", showPrevImageMobile);







if(parseInt(itemsInCart.textContent) === 0){
  itemsInCart.style.display = "none";
}else{
  itemsInCart.style.display = "inline-block";
}


plusBtn.addEventListener("click", () => {
  // Increase the value of the zero element by 1
  quantity.textContent = parseInt(quantity.textContent) + 1;
itemsInCart.textContent = parseInt(itemsInCart.textContent)+1
  if (parseInt(quantity.textContent) > 0 ) {
    minusBtn.style.opacity = 1;
    itemsInCart.style.display = "flex";
  }
});

minusBtn.addEventListener("click", () => {
  const currentValue = parseInt(quantity.textContent);
  // decrease the value of the zero element by 1

  if (currentValue > 0) {
    quantity.textContent = currentValue - 1;
    itemsInCart.textContent = parseInt(quantity.textContent);
  } else if (currentValue === 0 ) {
    minusBtn.style.opacity = 0.5;
    itemsInCart.style.display = "none";
  }
});

// Toggle the opacity of the minus button when the quantity value changes
const observeQuantity = () => {
  const quantityValue = parseInt(quantity.textContent);
  if (quantityValue === 0 && parseInt(itemsInCart.textContent) === 0) {
    minusBtn.style.opacity = 0.5;
    itemsInCart.style.display = "none";
    addToCart.disabled = true;
    addToCart.style.opacity = 0.5
  } else {
    itemsInCart.style.display = "flex";
    minusBtn.style.opacity = 1;
    addToCart.disabled = false;
    addToCart.style.opacity = 1
  }

  
};
observeQuantity();
// Create a new MutationObserver and observe changes to the quantity element
const observer = new MutationObserver(observeQuantity);
observer.observe(quantity, {
  childList: true,
  characterData: true,
  subtree: true,
});



  
addToCart.addEventListener("click", () => {
  //Get itemInfo
  const itemName = "Fall Limited Edition Sneakers";
  const itemPrice = 125.00;
  const itemQty = parseInt(document.getElementById("quantity").textContent);
// const itemImg = "./images/product1.jpg";

  //Calculate total price
  const totalPrice = itemPrice * itemQty;

  // Create the item HTML
  const itemHtml = `
   <div class="cartDetails">
    <span> 
        <img src="./images/product1.jpg" alt="" id="cartImg" />
     </span>
    <span class="itemNames">
      <p>${itemName}</p>
      <p>$${itemPrice.toFixed(2)} x ${itemQty} <strong>$${totalPrice.toFixed(2)}</strong></p>
    </span>
  
  </div>
  `;


    const cartItems = document.querySelector(".cartDetails .cartItems");
  cartItems.innerHTML = itemHtml;

// console.log(itemImg)
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
