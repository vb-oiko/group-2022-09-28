// на кожну окрему домашку будь ласка окрему гілку та окремий пул-ріквест
// нову гілку завжди робимо від мейн
// ввід - вивід та логіка повинні бути відокремлені
// якщо чогось в завданні не просять робити - краще цього не робіть
// не обовʼязково перетворювати рядок на маси щоб дістатися до конкретного символа
// код повинен працювати на будь-яких даних а не лише на наведеному у завданні прикладі
// перевизначення параметрів функції вважається поганою практикою

// Відмінності стрілочних функцій від звичайних.

// Функція, що самовизивається (IIFE).
// https://developer.mozilla.org/ru/docs/Glossary/IIFE

// const sum = (a, b) => {
//   console.log(`${a} + ${b} = ${a + b}`);
//   return a + b;
// };

// sum(1, 2);

// const add5 = ((b) => {
//   const addNumber = (a) => {
//     return a + b;
//   };

//   return addNumber;
// })(5);

// console.warn(add5(6));

// Рекурсія.
// Визначення та приклади використання
// const tree = {
//   value: 0,
//   children: [
//     {
//       value: 1,
//       children: [{ value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }],
//     },
//     { value: 6, children: [] },
//     {
//       value: 7,
//       children: [
//         { value: 8, children: [{ value: 9 }] },
//         { value: 10 },
//         { value: 11 },
//         {
//           value: 12,
//           children: [
//             { value: 13 },
//             { value: 14 },
//             { value: 15 },
//             {
//               value: 16,
//               children: [
//                 { value: 17 },
//                 { value: 18, children: [{ value: 19 }] },
//                 { value: 20 },
//                 { value: 21 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     { value: 22 },
//     { value: 23 },
//   ],
// };

// function printNode(node) {
//   console.log(node.value);

//   if (node.children === undefined) {
//     return;
//   }

//   if (node.children.length === 0) {
//     return;
//   }

//   for (let i = 0; i < node.children.length; i++) {
//     printNode(node.children[i]);
//   }
// }

// printNode(tree);

// 1, 1, 2, 3, 5, 8, 13, 21 ...
// fib(8) = 21

// function fib(n) {
//   console.log(n);
//   if (n <= 2) {
//     return 1;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// console.warn(fib(8));

// https://uk.javascript.info/recursion
// https://javascript.info/recursion

// Lexical scope. Лексична область видимості.

// var teacher = "Kyle";

// function ask(question) {
//   console.log(teacher, question);
// }

// function otherFunction() {
//   var teacher = "Suzy";

//   ask("Why?");
// }

// otherFunction();

// Що таке замикання?.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// https://www.youtube.com/watch?v=e-5obm1G_FY&ab_channel=JSConf
// https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8

// var teacher = "Kyle";

// function ask(question) {
//   console.log(teacher, question);
// }

// teacher = "Suzy";

// ask("Why?");
// const counter = buildCounter();

// console.warn(counter);

// var buildCounter = function buildCounter() {
//   var counter = 0;

//   return function () {
//     console.log(counter);
//     counter += 1;
//   };
// };

// // console.warn(counter);

// counter();
// counter();
// counter();
// counter();

// const add5 = ((b) => {
//   const addNumber = (a) => {
//     return a + b;
//   };

//   // addNumber(5)
//   return addNumber;

// })(5);

// // console.warn(add5(6));
// // console.warn(add5(1));

// const counter1 = function buildCounter() {
//   var counter = 0;

//   return function () {
//     console.log(counter);
//     counter += 1;
//   };
// };

// console.warn(counter1);

// counter1();
// counter1();
// counter1();
// counter1();

// Lexical Environment
// https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda#5ced

const addBuilder = (b) => {
  let counter = 0;

  const addNumber = (a) => {
    counter += 1;
    console.log({ a, outer: { b, counter } });
    return a + b * counter;
  };

  return addNumber;
};

const add5 = addBuilder(5);
const add10 = addBuilder(10);

console.warn(add5(4));
console.warn(add5(7));
console.warn(add5(6));
console.warn("-------------");
console.warn(add10(2));
console.warn(add10(3));
console.warn(add10(4));
console.warn(add10(5));
