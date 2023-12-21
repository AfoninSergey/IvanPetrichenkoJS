/* Задание 2 на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла + 

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять +

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"+

*/

'use strict';

let numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');

while (numberOfFilms == null || numberOfFilms.trim().length == 0 || numberOfFilms.length > 50) {
    numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
}
console.log(numberOfFilms);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

for (let i = 1; i <= 1; i++) {    
    let lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    while (lastMovie == null || lastMovie.trim().length == 0 || lastMovie.length > 50) {
        lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    }
    let ratingOfMovie = prompt('Насколько оцените его?', '');
    while (ratingOfMovie == null || ratingOfMovie.trim().length == 0 || ratingOfMovie.length > 50) {
        ratingOfMovie = prompt('Насколько оцените его?', '');
    }
    personalMovieDB.movies[lastMovie] = ratingOfMovie;
}


console.log(personalMovieDB);

if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

