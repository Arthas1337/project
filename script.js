"use strict";

 let numberOfFilms;
function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
 numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}
start();
const pesonalMovieDB = {
    count:numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt('какой фильм смотрел?', ''),
              b = prompt('на скок оценишь?', '');
              
    
              if(a != null && b != null && a!= '' && b != '' && a.length < 50  ){
                pesonalMovieDB.movies[a] = b;
                  console.log('done');
    
              } else {
                  console.log('error');
                  i--;
              }
    }
 }
 rememberMyFilms();
      
function detectPersonalLevel(){
    if(pesonalMovieDB.count == 10 ){
        console.log('просмотрено довольно мало фильмов');

        } else if(pesonalMovieDB.count > 10 && pesonalMovieDB.count < 30 ){
              console.log('вы классический зритель');
        }else if(pesonalMovieDB.count > 30){
            console.log('вы киноман');
        }else{
            console.log('error');
        }

}
detectPersonalLevel();


function ShowMyDB(){

     if(pesonalMovieDB.privat == false){

        console.log(pesonalMovieDB);
     } else {
            console.log('error');
     }
     
}

ShowMyDB(pesonalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимы жанр под номером ${i}`);
        pesonalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();

console.log(ShowMyDB());