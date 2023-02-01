// Symbol.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// const myProp1 = Symbol("my symbol");
// const myProp4 = Symbol("my symbol");
// const myProp2 = Symbol.for("my symbol");
// const myProp3 = Symbol.for("my symbol");

// console.warn(myProp1 === myProp4);
// console.warn(myProp1 === myProp2);
// console.warn(myProp3 === myProp2);

// const obj = {
//   a: 5,
//   "4b": "test",
//   [" 4b" + 4]: "aaaa",
//   [myProp1]: "symbol1",
//   [myProp2]: "symbol2",
//   myProp1: "fff",
//   [5]: "efefefe",
//   [Symbol("my symbol")]: 555,
// };
// console.warn(obj);

// obj[myProp1] = "something new";

// console.warn(obj);

// for (key in obj) {
//   console.warn(key);
// }

// console.warn(Object.getOwnPropertyNames(obj));

// Iterators.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators#%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators#%D0%B8%D1%82%D0%B5%D1%80%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D1%8B%D0%B5_%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B

// { done: false, value: 5 };
// { done: true };

// let i = 0;

// const obj = {
//   next() {
//     if (i < 10) {
//       i++;
//       return { done: false, value: Math.random() };
//     }

//     return { done: true };
//   },
//   [Symbol.iterator]() {
//     return this;
//   },
// };

// let x = obj.next();

// while (!x.done) {
//   console.warn(x.value);
//   x = obj.next();
// }
// console.warn(x);

// for (const x of obj) {
//   console.warn(x);
// }

// Generators.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators#%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators#%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D1%8B%D0%B5_%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// function* idGenerator() {
//   console.warn("before 1");
//   yield 1;
//   console.warn("before 2");
//   yield 2;
//   console.warn("before 3");
//   yield 3;
//   console.warn("after 3");

//   //   for (let i = 0; i < 10; i++) {
//   //     yield i;
//   //   }
// }

// const idIterator = idGenerator();

// for (const id of idIterator) {
//   console.warn(id);
// }

// function* idGenerator() {
//   let i = 0;
//   let x;

//   while (true) {
//     x = yield i;
//     i += x ? x : 1;
//     console.warn({ i, x });
//   }
// }

// const idIterator1 = idGenerator();
// const idIterator2 = idGenerator();

// console.warn(idIterator1.next(undefined));
// console.warn(idIterator1.next(undefined));
// console.warn(idIterator1.next(5));
// console.warn(idIterator1.next(2));

// function* generator1() {
//   yield 2;
//   yield 3;
//   yield 4;
// }

// function* generator2() {
//   yield 1;
//   yield* generator1();
//   yield 5;
//   yield* generator1();
// }

// const iterator = generator2();

// for (const i of iterator) {
//   console.warn(i);
// }

// function* circularArrayGenerator(arr) {
//   let i = 0;
//   while (true) {
//     yield arr[i % arr.length];
//     i++;
//   }
// }

// const dayOfWeekIterator = circularArrayGenerator([
//   "Monday",
//   "Tuesday",
//   "Wednesday",
// ]);

// console.warn(dayOfWeekIterator.next().value);
// console.warn(dayOfWeekIterator.next().value);
// console.warn(dayOfWeekIterator.next().value);
// console.warn(dayOfWeekIterator.next().value);
// console.warn(dayOfWeekIterator.next().value);
// console.warn(dayOfWeekIterator.next().value);
// console.warn(dayOfWeekIterator.next().value);

function* createTypewriter(text) {
  let i = 1;
  while (i <= text.length) {
    yield text.slice(0, i);
    i++;
  }
}

const typewriter = createTypewriter("Hello world!");

const print = (text) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(text);
      resolve();
    }, 300);
  });

const divEl = document.querySelector("#div");

const render = (text) =>
  new Promise((resolve) => {
    setTimeout(() => {
      divEl.innerText = text;
      resolve();
    }, 200);
  });

async function run() {
  for (const s of createTypewriter("Hello world!")) {
    await Promise.race([render(s), print(s)]);
  }
}

run();
