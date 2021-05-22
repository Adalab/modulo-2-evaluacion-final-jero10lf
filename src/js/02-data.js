let globalFilm = [];
let favoriteFilm = [];

function getdataApi() {
  let inputValue = filmsearchElement.value;
  fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      for (const oneData of data) {
        globalFilm.push(oneData.show);
      }
      renderFilm();
    });
}

function handleSearch(ev) {
  getdataApi();
}

// submit form

function handleForm(ev) {
  ev.preventDefault();
}

btnsearchElement.addEventListener("click", handleSearch);
formElement.addEventListener("submit", handleForm);

function renderFilm() {
  listfilm.innerHTML = "";
  for (const film of globalFilm) {
    listfilm.innerHTML += `<li id="${film.id}" class="film__list--itemclas js-film">`;
    listfilm.innerHTML += `<h3 class="film__title">${film.name}</h3>`;
    if (film.image === null) {
      listfilm.innerHTML += `<img class="serie__img" src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" title="${film.name}" alt="${film.name} cover not available"/>`;
    } else {
      listfilm.innerHTML += `<img class="serie__img" src="${film.image.medium}" title="${film.name}" alt="${film.name}  cover"/>`;
    }
    listfilm.innerHTML += "</li>";
  }
}
