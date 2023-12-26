//_________________________________ Типы данных (2 вида, 8 типов):
// 1) вид примитивные:
//  1. Numbers (числа целые и дробные), NaN, Infinity, - Infinity
//  2. BigInt (2 в 53 степени)
//  3. String (строки)
//  4. Null (когда чего-то просто не существует)
//  5. Undefind (когда что-то существует, но у него нет значения)
//  6. Boolean (true/false)
//  7. Symbol
// 2) объекты:
//  1. Object (простые объекты)
//  2. (частные случаи объектов):
//      - Array (Массивы)
//      - Function (Функции)
//      - Data (объект даты)
//      - Error (Объект ошибки)
//      - Reg (Регулярные выражения)
//_________________________________ Объявление переменных:
// 1. var (устаревший формат). Видна еще до создания со значением Undefind (не ошибка, а какое-то значение)
// 2. let. Видна только после создания (иначе Ошибка)
// 3. const. Как и let, только "Константа" (прямых констант в js нет. Напр. объект можно менять)
//_________________________________ Конкатенация, интерполяция:
// Конкатенация: "Изучаю" + " JavaScript"
// Интерполяция: let language = "JavaScript" `Изучаю ${language}` (Бэктики)
//_________________________________ Операторы:
// + (включая унарный +variable динамическая типизация) (тернарный в условиях something ? do it )
// -, *, /, =, ==, ===, !=, !==, &&, ||, %, >, <, >=, <=, incr ++, decr-- префиксный и постфиксный
//_________________________________ Условия:
// if () {} else if {} else
// тернарный: "something ? do it : or do it"
// на строгое равенство: switch (something) { case another: do somethig; breack; default; breack;}
//_________________________________ Циклы:
// while (not true) {do it; change true}
// do {something; change true} while (not true)
// for (let i = 0; i < 2; i++) { if (something) {breack; or continue;} do something}
// Цикл в цикле:
// for (let i = 0; i < 2; i++) { 
//    for (let j = 0; j < 2; j++) {
//    
//    }
//}
// Цикл в цикле с меткой для continue или breack:
// tag: for (let i = 0; i < 2; i++) { 
//          for (let j = 0; j < 2; j++) {
//              for (let k = 0; k < 2; k++) {
//                  if (true) continue tag;
//              }      
//          }
//     }
//_________________________________Функции:
// _.ЗАМЫКАНИЕ._ - Способность функции запоминать ЛЕКСИЧЕСКОЕ ОКРУЖЕНИЕ в котором она была СОЗДАНА?? Или всётаки Вызвана? так и не понял
// _.ЗАМЫКАНИЕ._ (по другому) - Функция, которая возвращена (return) из другой функции со своей областью видимости 
// let message = "Hello World!"

// let logToConsole = function() {
//     let mess = "Hello Gray";
//     console.log(mess);
// }
// logToConsole();
// Для понимания замыкания 1-е разбираем понятие ЛЕКСИЧЕСКОЕ ОКРУЖЕНИЕ:
// ЛЕКСИЧЕСКОЕ ОКРУЖЕНИЕ - Это невидимый (скрытый) объект (есть у любого блока, скрипта или функции),
// в котором два свойства (пары - ключ/значение):
// {
//    объект с переменными в текущей области видимости: {}  
//    ссылка на родительское (внешнее лексическое) окружение: ->
// }
// у кода выше 2 лексических окружения:
// 1. глобальное лексическое окружение (имеет доступ только к своим переменным) {
//          переменные: {message: "Hello World!", logToConsole: function}
//          ссылка на родительское окружение: -> null (у глобального лексического окружения ничего нет)
//  }
//
// 2. локальное лексическое окружение (имеет доступ к своим локальным переменным и к переменным родительского окружения){
//   переменные (локальные): {mess: "Hello Gray"} 
//   ссылка на родительское лексическое окружение: -> {}
//  } 
// ВАЖНО!!! 2-е лексическое окружение СОЗДАЕТСЯ ТОЛЬКО ВО ВРЕМЯ ВЫЗОВА ФУНКЦИИ!

