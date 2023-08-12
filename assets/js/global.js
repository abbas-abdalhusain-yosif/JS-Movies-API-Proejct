let searchButton = document.querySelector(".search-button .button");
let searchClose = document.querySelector(".search-input .button");
let searchInput = document.querySelector(".search-input");
searchButton.addEventListener("click", function () {
  this.style.display = "none";
  searchInput.style.display = "flex";
});
searchClose.addEventListener("click", function (e) {
  searchInput.style.display = "none";
  searchButton.style.display = "block";
});
