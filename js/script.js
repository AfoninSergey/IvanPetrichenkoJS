/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?' +

2) Создать объект personalMovieDB и в него поместить такие свойства: +
    - count - сюда передается ответ на первый вопрос +
    - movies - в это свойство поместить пустой объект +
    - actors - тоже поместить пустой объект +
    - genres - сюда поместить пустой массив +
    - privat - в это свойство поместить boolean(логическое) значение false +

3) Задайте пользователю по ДВА РАЗА вопросы:
    - 'Один из последних просмотренных фильмов?' +
    - 'На сколько оцените его?' +
Ответы стоит поместить в отдельные переменные +
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1' +
    }

Проверить, чтобы все работало без ошибок в консоли */
'use strict';

const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
console.log(numberOfFilms);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}
console.log(personalMovieDB);

const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
const ratingOfMovie = prompt('Насколько оцените его?', '');
personalMovieDB.movies[lastMovie] = ratingOfMovie;
const lastMovie2 = prompt('Один из последних просмотренных фильмов?', '');
const ratingOfMovie2 = prompt('Насколько оцените его?', '');
personalMovieDB.movies[lastMovie2] = ratingOfMovie2;

console.log(personalMovieDB);