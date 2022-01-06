"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const pesonalMovieDB = {
    count:numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
    const a = prompt('какой фильм смотрел?', ''),
          b = prompt('на скок оценишь?', '');
          

          if(a != null && b != null && a!= '' && b != '' && a.length < 50  ){
              console.log('done');

          } else {
              console.log('error');
              i--;
          }
}
         if(pesonalMovieDB.count == 10 ){
         console.log('просмотрено довольно мало фильмов');

         } else if(pesonalMovieDB.count > 10 && pesonalMovieDB.count < 30 ){
               console.log('вы классический зритель');
         }else if(pesonalMovieDB.count > 30){
             console.log('вы киноман');
         }else{
             console.log('error');
         }


console.log(pesonalMovieDB);

