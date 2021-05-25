function listenClickedFavorites() {
  const liElements = document.querySelectorAll(".js-deleteIcon");
  for (const liElement of liElements) {
    liElement.addEventListener("click", deleteFav);
  }
}

function deleteFav(event) {
  const clickeddelfav = event.currentTarget;
  const clickedFav = parseInt(clickeddelfav.id);
  const favFound = favorites.findIndex((fav) => fav.id === clickedFav);

  favorites.splice(favFound, 1);
  setInLocalStorage();
  renderFavorites();
  renderSeries();
}
function deleteallFav() {
  favorites = [];
  setInLocalStorage();
  renderFavorites();
  renderSeries();
}
deletefavElement.addEventListener("click", deleteallFav);
