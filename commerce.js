let close = document.getElementById("closeOrange");
let modal = document.getElementsByClassName("modalBg")[0];
let displayItems = document.getElementById("overlay");

//  var displayItems = document.querySelectorAll('.highlight')[0];
//  var displayItems = document.querySelectorAll('.highlight').forEach( => {
//     document.querySelector('madalBg').style.display = 'block'
// })

let amountValue = 0;
let currentImg = 1;

closeOrange.addEventListener("click", closeModal);
displayItems.addEventListener("click", openModal);

function closeModal() {
  modal.style.display = "none";
}

function openModal() {
  modal.style.display = "block";
}

function nextImage() {
  if (currentImg == 4) {
    currentImg = 1;
  } else {
    currentImg++;
  }
  thumbMob.src = `./images/image-product${currentImg}.jpg`;
}
function prevImage() {
  if (currentImg == 1) {
    currentImg = 4;
  } else {
    currentImg--;
  }
  thumbMob.src = `./images/image-product${currentImg}.jpg`;
}
