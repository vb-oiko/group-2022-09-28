// Цикл for...in.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in

// const obj = { a: 1, b: 2, c: 3 };
// for (const key in obj) {
//   console.warn(obj[key]);
// }

// const arr = ["a", "b", "c"];
// for (const key in arr) {
//   console.warn(key);
// }

// const str = "sgrgsrgse";
// for (const key in str) {
//   console.warn(key);
// }

// Цикл for...of.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of

// const obj = { a: 1, b: 2, c: 3 };
// for (const key of Object.keys(obj)) {
//   console.warn(key);
//   console.warn(obj[key]);
// }

// obj.a;
// obj["" + "a"];

// for (const val of Object.values(obj)) {
//   console.warn(val);
// }
// for (const entry of Object.entries(obj)) {
//   console.warn(entry);
// }

// const arr = ["a", "b", "c"];
// for (const key of arr) {
//   console.warn(key);
// }

// const str = "sgrgsrgse";
// for (const key of str) {
//   console.warn(key);
// }

// break, continue.
// break
// continue

// for (let i = 0; i < 10; i++) {
//   if (i === 7) {
//     break;
//   }

//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.warn(i);
// }

// Вкладені цикли.
// цикл у циклі

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Нескінченні цикли.
// цикл із умовою, яка ніколи не стане брехнею
// let i = 1;
// let j = 5
// while (j < 5) {
//   if (i === 10) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

// Основи роботи з масивами.
// Визначення масиву, індексація
// const arr = [1, 2, 3];
// console.log(arr[0]);

// Варіанти створення масивів.
// new Array(), []

// const arr = new Array();
// console.log(arr);
// // arr[5] = 1;
// arr.push(1);
// console.log(arr);
// console.log(arr.length);

// const arr = new Array(5 + 7);
// const arr = [];
// console.log(arr);

// https://www.mattlunn.me.uk/2012/04/the-use-of-literals-vs-constructors/

// Методи для роботи з масивами.
// https://www.w3schools.com/js/js_array_methods.asp
// const set = new Set([1, 2, 2, 3, 3, 5, 6, 7]);
// console.warn(set[0]);
// const arr = Array.from(set);
// console.warn(arr);

// const arr = [];
// const obj = { a: 1, b: 2, c: 3 };
// console.warn(typeof arr);
// console.warn(Array.isArray(arr));
// console.warn(Array.isArray(obj));

// const arr = Array.of(1);
// console.log(arr);

// const arr = [5, 4, 2, 78, 92];

// console.warn(arr.at(-5));
// console.warn(arr[arr.length - 1]);

// console.warn(arr.concat(-5, 2, 4));
// console.warn(arr);
// console.warn(arr.push(-5, 2, 4));
// console.warn(arr);

// copyWithin();
// console.warn(arr.copyWithin(arr, 3));

// entries();
// console.warn(Array.from(arr.entries()));

// fill();
// console.warn(arr.fill(5));
// console.warn(arr);

// const arr1 = new Array(10).fill(new Array(2).fill(1));
// console.warn(arr1);

// flat();
// const arr1 = [1, 2, [3, 4, [5, 6]]];
// console.warn(arr1.length);
// console.warn(arr1.flat(1));
// console.warn(arr1.flat(2));
// console.warn(arr1.flat(3));

// includes();
// console.warn(arr.includes(92));
// console.warn(arr.includes(1));

// indexOf();
// const arr = [5, 4, 2, 78, 92];
// console.warn(arr.indexOf(92));
// console.warn(arr.indexOf(1));

// const obj1 = { a: 1 };
// const obj2 = { a: 1 };
// console.warn(obj1 === obj2);
// const arr2 = [obj1, obj2];
// console.warn(arr2.indexOf(obj2));
// console.warn(arr2.indexOf({ a: 1 }));

// join();
// const arr = [5, 4, 2, 78, 92, [1, 2]];
// console.warn(arr.join());
// console.warn(arr.join(" "));
// console.warn(arr.flat().join(", "));

// keys();
// const arr = [5, 4, 2, 78, 92, [1, 2]];
// console.warn(arr.keys());

// lastIndexOf();
// const arr = [5, 4, 2, 78, 78, 78, 92];
// console.warn(arr.indexOf(78));
// console.warn(arr.lastIndexOf(78));

// pop();
// const arr = [5, 4, 2, 78, 92];
// console.warn(arr.pop());
// console.warn(arr.pop());
// console.warn(arr.pop());
// console.warn(arr.pop());
// console.warn(arr.pop());
// console.warn(arr.pop());
// console.warn(arr);

// push();

// reverse();
// const arr = [5, 4, 2, 78, 92];
// console.warn(arr.reverse());
// console.warn(arr);

// shift();
// const arr = [5, 4, 2, 78, 92];
// console.warn(arr.shift());
// console.warn(arr);
// unshift();
// const arr = [5, 4, 2, 78, 92];
// console.warn(arr.unshift(7));
// console.warn(arr);

// slice();
// const arr = [5, 4, 2, 78, 92];
// console.warn(arr.slice(1, 4));
// console.warn(arr.slice(1));
// console.warn(arr);

// toLocaleString();
// toString();
// const arr = [5, 4, 2, 78, 92];
// console.warn(arr.toString());

// splice();
// const arr = [5, 4, 2, 78, 92, 100];
// console.warn(arr.splice(2, 3));
// console.warn(arr);

// values();

// Перебір масивів.
// Варіанти перебору масиву за допомогою циклів

// forEach
// var b = "";
// const arr = [5, 4, 2, 78, 92, 100];

// const a = arr.forEach((elem) => {
//   //   console.log(elem * 2);
//   //   console.log(`${elem} * 2 = ${elem * 2}`);

//   b += `${elem} * 2 = ${elem * 2}\n`;
// });
// // console.warn(b);
// console.warn(a);

// Методи перебору масиву.
// map

// const arr = [5, 4, 2, 78, 92, 100];
// const arr2 = arr.map((elem) => {
//   return `${elem} * 2 = ${elem * 2}`;
// });
// console.warn(arr2);
// console.warn(arr);
// console.warn(arr2.join("\n"));
// console.warn(arr);

// filter
// const arr = [5, -4, 2, 78, 78, 78, -92, 100];
// console.warn(
//   arr.filter((elem) => {
//     return elem === 78;
//   })
// );

// reduce

// find();
// findIndex();
// findLast();
// findLastIndex();
// const arr = [5, -4, 2, 78, 78, 78, -92, 100];
// console.warn(
//   arr.find((elem) => {
//     return elem < 0;
//   })
// );
// console.warn(
//   arr.findLast((elem) => {
//     return elem < 0;
//   })
// );
// console.warn(
//   arr.findIndex((elem) => {
//     return elem < 0;
//   })
// );
// console.warn(
//   arr.findLastIndex((elem) => {
//     return elem < 0;
//   })
// );

// sort();
// const arr = [5, -4, 2, 78, 78, 78, -92, 100];
// console.warn(arr.sort());
// console.warn(arr);
// console.warn(
//   arr.sort((a, b) => {
//     return a - b;
//   })
// );
// console.warn(
//   arr.sort((a, b) => {
//     return b - a;
//   })
// );

// some();
// const arr = [5, -4, 2, 78, 78, 78, -92, 100];
// const arr2 = [5, 2, 78, 78, 78, 100];
// console.warn(
//   arr.some((elem) => {
//     return elem < 0;
//   })
// );
// console.warn(
//   arr2.some((elem) => {
//     return elem < 0;
//   })
// );

// console.warn(
//   arr.every((elem) => {
//     return elem < 0;
//   })
// );

// console.warn(
//   arr2.every((elem, index) => {
//     return index % 2 === 0 && elem > 0;
//   })
// );

// let result = true;
// arr2.forEach((elem) => {
//   if (elem < 0) {
//     result = false;
//   }
// });
// console.warn(result);

// every();

// reduce();

// const arr2 = [5, 2, 78, 78, 78, 100];
// if all elements are positive
// const result = arr2.reduce((result, elem) => {
//   if (result === false || elem < 0) {
//     return false;
//   } else {
//     return true;
//   }
// }, true);

// const arr2 = [5, 2, -78, 78, 78, -100];
// const sum = arr2.reduce((currentSum, elem) => {
//   //   if (elem > 0) {
//   //     return (currentSum = currentSum + elem);
//   //   } else {
//   //     return (currentSum = currentSum + 0);
//   //   }

//   return elem > 0 ? currentSum + elem : currentSum;
// }, 0);

// const sum2 = arr2.reduce(
//   (currentSum, elem) => (elem > 0 ? currentSum + elem : currentSum),
//   0
// );

// console.warn(sum);

// reduceRight();

// Видалення елементів з масивів.
// оператор delete
// splice

// flatMap();

// exit();
