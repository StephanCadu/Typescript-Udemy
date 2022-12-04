"use strict";
fetch('https://swapi.co/api/people/1')
    .then(res => res.json())
    .then(data => data.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(film => console.log(film.title))
    .catch(err => console.log(err.message));
