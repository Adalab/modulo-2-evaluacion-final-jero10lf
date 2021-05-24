function renderSeries() {
  const seriesListElement = document.querySelector(".js-seriesList");

  let htmlCode = "";

  for (const serie of series) {
    let isSerieClass;
    let serieInFavorites = favorites.findIndex(
      (favorite) => favorite.id === serie.id
    );

    if (serieInFavorites === -1) {
      isSerieClass = "serie";
    } else {
      isSerieClass = "selected";
    }

    htmlCode += `<li id ="${serie.id}" class="js-serie li__serie ${isSerieClass} >`;
    htmlCode += `<h3 class="liTitle">${serie.name}</h3>`;
    if (serie.image === null) {
      htmlCode += `<img class="serie__img" src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" title="${serie.name}" alt="${serie.name} cover not available"/>`;
    } else {
      htmlCode += `<img class="serie__img" src="${serie.image.medium}" title="${serie.name}" alt="${serie.name}  cover"/>`;
    }
    htmlCode += "</li>";
  }

  seriesListElement.innerHTML = htmlCode;
  listenClickedSeries();
}
