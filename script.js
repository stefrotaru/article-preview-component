const arrow = document.querySelector(".article__author-sharebtn");
const share = document.querySelector(".share-container");

arrow.addEventListener("click", function () {
  share.classList.toggle("show");
});