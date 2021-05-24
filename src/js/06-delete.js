function listenClickedFavorites() {
  const liElements = document.querySelectorAll(".js-favoritesList");
  for (const liElement of liElements) {
    liElement.addEventListener("click", deleteFav);
  }
}

function deleteFav(event) {
  const clickeddelfav = event.currentTarget;
  const clickedFav = parseInt(clickeddelfav.id);
  const favFound = favorites.find((fav) => fav.id === clickedFav);

  series.push(favFound);
  favorites.splice(favFound, 1);

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
