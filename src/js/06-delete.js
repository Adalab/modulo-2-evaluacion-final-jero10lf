// listen elemento x
function listenClickedFavorites() {
  const liElements = document.querySelectorAll(".js-deleteIcon");

  for (const liElement of liElements) {
    liElement.addEventListener("click", deleteFav);
  }
}

//delete element favorite clicked
function deleteFav(event) {
  const clickeddelfav = event.currentTarget;
  const delFav = parseInt(clickeddelfav.id);
  const favFound = favorites.findIndex((fav) => fav.id === delFav);

  favorites.splice(favFound, 1);
  setInLocalStorage();
  renderFavorites();
  renderSeries();
}

//delete all favorite
function deleteallFav() {
  favorites = [];

  setInLocalStorage();
  renderFavorites();
  renderSeries();
}
deletefavElement.addEventListener("click", deleteallFav);
