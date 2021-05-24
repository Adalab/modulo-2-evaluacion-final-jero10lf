"use strict";

// API
function getSeriesFromApi(txtInput) {
  const url = `//api.tvmaze.com/search/shows?q=`;

  fetch(url + txtInput)
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
  let inputValue = filterElement.value;
  getSeriesFromApi(inputValue);
}

searchElement.addEventListener("click", handleSearch);

// submit form

function handleForm(ev) {
  ev.preventDefault();
}

formElement.addEventListener("submit", handleForm);
