/* Задание 3:

1) Первую часть задания повторить по уроку+

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы+

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres+

*/

'use strict';

let numberOfFilms;

function startProject() {
    numberOfFilms = prompt('Сколько фильмов Вы посмотрели?', '')
    while (numberOfFilms == null || numberOfFilms.trim().length == 0 || isNaN(numberOfFilms) || numberOfFilms.length > 10) {
        if (numberOfFilms == null) {
            numberOfFilms = prompt('Отмену жать нельзя) Напишите сколько?', '');
        } else if (numberOfFilms.trim().length == 0) {
            numberOfFilms = prompt('Вы ничего не ввели. Ну так сколько?', '');
        } else if (isNaN(numberOfFilms)) {
            numberOfFilms = prompt('Только цыфры, пожалуйста!', '');
        } else if (numberOfFilms.length > 10) {
            numberOfFilms = prompt('Слишком много символов! Напишите правду!', '');
        }
    }
}
// startProject();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

function rememberMyFilms() {
    for (let i = 1; i <= 2; i++) {    
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
}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
// detectPersonalLevel();

function writeYourGenres(genre) {
    for (let i = 1; i <= 3; i++) {
        genre[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
// writeYourGenres(personalMovieDB.genres);

function showMyDB(privat, database) {   
    if (!privat) {
        console.log(database)
    }
}
showMyDB(personalMovieDB.privat, personalMovieDB);