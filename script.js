"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const pesonalMovieDB = {
    count:numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('какой фильм смотрел?', ''),
      b = prompt('на скок оценишь?', ''), 
      c = prompt('какой фильм смотрел?', ''),
      d = prompt('на скок оценишь?', '');

pesonalMovieDB.movies[a] = b;
pesonalMovieDB.movies[c] = d;

console.log(pesonalMovieDB);

     
     