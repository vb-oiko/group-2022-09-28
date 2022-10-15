// Видалення елементів з масивів.
// оператор delete
// const obj = { name: "John" };
// console.warn(obj);
// delete obj.name;
// console.warn(obj);

// const arr = [1, 2, 3, 4];
// console.warn(arr);
// delete arr[0];
// console.warn(arr);

// flatMap();

// const arr = [1, 2, 3, 4];
// console.warn(arr);
// console.warn(arr.map((el) => [el, el * 2]));
// console.warn(arr.flatMap((el) => (el % 2 === 0 ? [] : [el * el])));
// console.warn(
//   arr.map((el) => (el % 2 === 0 ? null : el * el)).filter((el) => el !== null)
// );

// Основи роботи з функціями.
// визначення функції
// синтаксис створення та виклику

// func1(1);
// func2();
// var b = 2;

// function func1(a) {
//   var b = 3;
//   console.warn(b);
// }

// let func2 = function func3(a) {
//   console.warn(b);
//   console.warn(a);
//   let b = 3;
//   //   console.warn(func3);
//   func3 = 2; // ignored
//   //   console.warn(func3);
// };
// console.warn(func3);
// console.warn(b);

// func2 = "egew";
// func2(2, 3, 4);
// func3(5);

// console.warn(func1);
// func1 = "sjghkr";
// console.warn(func1);
// func1(); // type error

// func2(1);
// func2 = "srgr";

// призначення

// Варіанти створення функцій.
// function declaration

// function expression
// Порівняння 2 підходів щодо створення функцій

// Параметри функцій, значення за замовчанням.

// function func(a = 4, b = 12) {
//   console.warn({ a, b });
// }

// func(5);
// func(5, 13);

// func(5, undefined);
// func(undefined, 13);
// func((1, 2, 3, 2 + 3, 13 + 5));
// func(2 + 3, 13 + 5);
// func(, 13 + 5);
// func(13);

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters

// Передача параметрів функції.
// передача за посиланням
// передача за значенням
// відмінності у передачі значення змінної

// const holmes = { name: "Sherlock" };
// const watson = {};
// console.warn("obj=", holmes);

// function func(x) {
//   console.warn("x=", x); // = holmes
//   x.name = "John"; // holmes
//   //   console.warn("!!!x=", x); // holmes
//   //   const mary = { name: "Mary" };
//   //   x = mary; // mary
//   //   console.warn("x=", x);
//   //   x.name = "Jane"; // mary
//   //   console.warn("x=", x);
// }

// func(holmes);
// func(watson);

// // watson

// console.warn("obj=", holmes);
// console.warn("obj2=", watson);

// var a = 2;
// function func(x) {
//   console.warn("x=", x);
//   x = 3;
//   console.warn("x=", x);
// }

// func(a);
// console.warn(a);

// const arr = [1, 2, 3, 4];
// console.warn(arr);

// function func(x) {
//   return x.push(20);
// }

// var b = func(arr) - 1;
// console.warn({ b, arr });
// console.warn(arr[b]);
// console.warn(arr);
// console.warn(func(arr));
// console.warn(arr);

// function func(x) {
//   var y = x * x;
//   //   return x * x;
//   //   return undefined;
// }

// var a = func(5);
// console.warn(a);
// console.warn(a);

// var a = 5;

// function square2() {
//   a = a * a;
// }

// function logSquare(a) {
//   if (a < 0) {
//     return;
//   }

//   console.warn(a * a);
// }

// function square(a) {
//   return a * a;
// }

// console.warn(square(5));
// console.warn(logSquare(-5));

// Область видимості функції.
// як працює функціональна область видимості

// var a = 2;

// function func1(params) {
//   var b = 3;

//   function func2(params) {
//     var c = 4;

//     console.warn(a);
//     console.warn(b);
//     console.warn(c);

//     return ()=>{ console.warn();}
//   }

//   func2();

//   return func2;
// }

// func1()()();

// func2();

// Псевдо-масив arguments.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/arguments

// function sum() {
//   if (arguments.length === 0) {
//     return 0;
//   }

//   let sum = 0;
//   for (const arg of arguments) {
//     sum += arg;
//   }

//   return sum;
// }

// console.warn(sum());
// console.warn(sum(1));
// console.warn(sum(1, 2, 3, 4));

// Повернення значення з функції.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/return

// Стрілочні функції.
// https://www.w3schools.com/js/js_arrow_function.asp

// const func1 = (a) => {
//   console.warn(a);
//   return a * a;
// };
// console.warn(func1(5));

// const func11 = (a) => console.warn(a);
// console.warn(func11(5));

// const func2 = (a) => (a > 0 ? a * a : 0);

// const func3 = (a) => ({ square: a * a });
// const func33 = (a) => {
//   return { square: a * a };
// };

// const func4 = (a) => [a, a, a];

// Функція-колбек.
// Визначення та приклади використання

// https://www.w3schools.com/js/js_callback.asp

// Функція вищого порядку.
// Визначення функції вищого порядку та приклад створення

// https://www.freecodecamp.org/news/higher-order-functions-in-javascript/

// const arr = [1, 2, 3, 4];

// function square(a) {
//   return a * a;
// }

// function cube(a) {
//   return a * a * a;
// }

// function cb(a) {
//   console.warn(a);
// }

// cb(5);
// console.warn(cb(5));

// function map(arr, callback) {
//   const result = [];

//   for (const el of arr) {
//     result.push(callback(el));
//   }

//   return result;
// }

// console.warn(map(arr, square));
// console.warn(map(arr, cube));
// console.warn(map(arr, cb));

// function buildMultiplyBy(a) {
//   return function (b) {
//     return b * a;
//   };
// }

// const multiplyBy5 = buildMultiplyBy(5);
// const multiplyBy10 = buildMultiplyBy(10);

// console.warn(multiplyBy5(4));
