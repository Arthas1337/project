"use strict";


const pesonalMovieDB = {
    count:0, 
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        pesonalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    
        while(pesonalMovieDB.count == '' || pesonalMovieDB.count == null || isNaN(pesonalMovieDB.count)){
            pesonalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMyFilms: function(){
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
     },
     detectPersonalLevel: function(){
        if(pesonalMovieDB.count == 10 ){
            console.log('просмотрено довольно мало фильмов');
     if(pesonalMovieDB.count > 10 && pesonalMovieDB.count < 30 ){
                  console.log('вы классический зритель');
            }else if(pesonalMovieDB.count > 30){
                console.log('вы киноман');
            }else if(pesonalMovieDB.count < 10){
                console.log('просмотрено довольно мало фильмов');

            } else {
                console.log('error');
            }
    
              } 
                  
              },
              ShowMyDB: function(){

          if(pesonalMovieDB.privat == false){
     
             console.log(pesonalMovieDB);
          } else {
                 console.log('error');
          }
     
     },
     toggleVisibleMyDB: function(){
        if(pesonalMovieDB.privat ){
            pesonalMovieDB.privat = false;
        }else{
            pesonalMovieDB.privat = true;
        }
    },
     writeYourGenres: function(){
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre === '' || genre === null){
                console.log('Вы ввели некоректные данные');
             i--;
            }else{
                pesonalMovieDB.genres[i - 1] = genre;
            }
           
        } 

        pesonalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1}, - это ${item}  `);
        });

        

    }
    
};
