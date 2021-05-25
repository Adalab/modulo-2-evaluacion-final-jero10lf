// create localstorage
function setInLocalStorage() {
  const stringFavorites = JSON.stringify(favorites);

  localStorage.setItem("favorite", stringFavorites);
}

// localstorage charge
function getFromLocalStorage() {
  let localStorageFavourites = localStorage.getItem("favorite");

  if (localStorageFavourites === null) {
    favorites = [];
  } else {
    const arrayFav = JSON.parse(localStorageFavourites);
    favorites = arrayFav;
    renderFavorites();
  }
}

getFromLocalStorage();
