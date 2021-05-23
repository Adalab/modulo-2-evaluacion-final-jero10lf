"use strict";

const filterElement = document.querySelector(".js-inputsearch");
const searchElement = document.querySelector(".js-btnsearch");
const formElement = document.querySelector(".js-form");

const favoritesListElement = document.querySelector(".js-favoritesList");

let series = [];
let favorites = [];

// API
const url = `//api.tvmaze.com/search/shows?q=`;

function getSeriesFromApi(title) {
  fetch(url + title)
    .then((response) => response.json())
    .then((data) => {
      series = [];
      for (const oneShow of data) {
        series.push(oneShow.show);
      }
      renderSeries();
    });
}

// search data input

function handleSearch(ev) {
  let filterValue = filterElement.value;
  getSeriesFromApi(filterValue);
}

searchElement.addEventListener("click", handleSearch);

// submit form

function handleForm(ev) {
  ev.preventDefault();
}

formElement.addEventListener("submit", handleForm);

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

function listenClickedSeries() {
  const liElements = document.querySelectorAll(".js-serie");
  for (const liElement of liElements) {
    liElement.addEventListener("click", addFavorites);
  }
}

function renderFavorites() {
  let htmlCode = "";
  for (const elementFavorite of favorites) {
    htmlCode += `<li id ="${elementFavorite.id}" class="js-serieFav li__fav"  >`;
    htmlCode += `<h3 class="liTitle">${elementFavorite.name}</h3>`;
    if (elementFavorite.image === null) {
      htmlCode += `<img class="serie__img" src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" title="${elementFavorite.name}" alt="${elementFavorite.name} cover not available"/>`;
    } else {
      htmlCode += `<img class="serie__img" src="${elementFavorite.image.medium}" title="${elementFavorite.name}" alt="${elementFavorite.name}  cover"/>`;
    }
    htmlCode += "</li>";
  }

  favoritesListElement.innerHTML = htmlCode;
}
