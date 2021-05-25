function listenClickedSeries() {
  const liElements = document.querySelectorAll(".js-serie");
  for (const liElement of liElements) {
    liElement.addEventListener("click", addFavorites);
  }
}
function addFavorites(event) {
  const clickedfavorite = event.currentTarget;
  const clickedSerie = parseInt(clickedfavorite.id);
  const serieFound = series.find((serie) => serie.id === clickedSerie);
  const favoriteFound = favorites.findIndex(
    (favorite) => favorite.id === clickedSerie
  );

  if (favoriteFound === -1) {
    favorites.push(serieFound);
  } else {
    favorites.splice(favoriteFound, 1);
  }
  renderSeries();
  renderFavorites();
}
function renderFavorites() {
  let htmlCode = "";
  for (const elementFavorite of favorites) {
    htmlCode += `<li id ="${elementFavorite.id}" class="js-serieFav li__fav"  >`;
    htmlCode += ` <div class="fav_content">`;
    htmlCode += `<h3 class="liTitle">${elementFavorite.name}</h3>`;
    htmlCode += `<button id ="${elementFavorite.id}" class="js-deleteIcon faicon ">x</button>`;
    htmlCode += "</li>";
    if (elementFavorite.image === null) {
      htmlCode += `<img class="serie__img" src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" title="${elementFavorite.name}" alt="${elementFavorite.name} cover not available"/>`;
    } else {
      htmlCode += `<img class="serie__img" src="${elementFavorite.image.medium}" title="${elementFavorite.name}" alt="${elementFavorite.name}  cover"/>`;
    }
  }
  setInLocalStorage();
  favoritesListElement.innerHTML = htmlCode;
  listenClickedFavorites();
}
