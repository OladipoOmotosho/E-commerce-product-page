let close = document.getElementById("closeOrange");
let modal = document.getElementsByClassName("modalBg")[0];
let displayItems = document.getElementById("overlay");

//  var displayItems = document.querySelectorAll('.highlight')[0];
//  var displayItems = document.querySelectorAll('.highlight').forEach( => {
//     document.querySelector('madalBg').style.display = 'block'
// })

closeOrange.addEventListener("click", closeModal);
displayItems.addEventListener("click", openModal);

function closeModal() {
  modal.style.display = "none";
}

function openModal() {
  modal.style.display = "block";
}
