let globalFilm = [];
let favoriteFilm = [];
const filmInput = "girl";
//filmsearch.value;

fetch(`http://api.tvmaze.com/search/shows?q=${filmInput}`)
  .then((response) => response.json())
  .then((data) => {
    globalFilm = data;
  });
rende;
function renderFilm(films) {}
listfilm.innerHTML = "";
for (const film of films) {
  listfilm.innerHTML += `<li id="${film.id}" class="film__list--item js-film ${film.name}"> <div class="imagenfilm-box"></div>`;
}
