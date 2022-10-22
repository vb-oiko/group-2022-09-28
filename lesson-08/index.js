// Функції в об'єктах (методи)
// властивості та методи в об'єкті

// const obj = {
//   name: "John",
//   sayHi: function A() {
//     console.log("Hi");
//   },
//   sayBye: () => {
//     console.log("Bye");
//   },

//   getName() {
//     console.log("John");
//   },
// };

// console.log(obj.name);
// obj.sayHi();
// obj.getName();
// console.log(obj);

// Глобальний об'єкт window (глобальний контекст)
// var у global scope
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
// var is added as a non-configurable property
// Unqualified identifier assignments

// var a = 10;

// const aaaa = "srgrgre";
// let aa = "srgrgre";

// aaaaa = 5;

// console.log(this);
// console.log(window);

// console.log(window.a);
// console.log(this.a);

// Функціональний контекст
// this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this

// lexical context
// =========================================

// var teacher = "Kyle";

// function ask(question) {
//   console.log(teacher, question);
// }

// function otherFunction() {
//   var teacher = "Suzy";

//   ask("Why?");
// }

// almost equivalent of dynamic context
// =========================================

// function ask(question) {
//   console.log(this.teacher, question);
// }

// function otherLesson() {
//   var myContext = { teacher: "Suzy" };

//   console.warn(this);
//   ask("Why?");
//   ask.call(myContext, "Why?");
// }

// otherLesson();

// 4 ways of calling a function
// =========================================
// implicit binding
// explicit binding
// * "constructor calls"
// * linking

// implicit binding
// =========================================

// var teacher = "Suzy";

// const lesson = {
//   teacher: "Kyle",
//   ask(question) {
//     console.log(this.teacher, question);
//   },
// };

// const prop = "ask";

// lesson.ask("What is implicit binding?");
// lesson["ask"]("What is implicit binding?");
// lesson[prop]("What is implicit binding?");

// console.log(this.teacher);

// implicit dynamic binding
// =========================================

// function ask(question) {
//     console.log(this.teacher, question);
//   }

//   const lesson1 = {
//     teacher: "Kyle",
//     ask,
//   };

//   const lesson2 = {
//     teacher: "Suzy",
//     ask,
//   };

//   lesson1.ask("What is dynamic binding?");
//   lesson2.ask("What is dynamic binding?");

// Методи підміни контексту
// call
// https://developer.mozilla.org/ua/docs/Web/JavaScript/Reference/Global_Objects/Function/call

// apply
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

// bind
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

// explicit binding
// =========================================

// function ask(question, a, b) {
//   console.log(this.teacher, question, a, b);
// }

// const lesson1 = {
//   teacher: "Kyle",
//   ask,
// };

// const lesson2 = {
//   teacher: "Suzy",
//   ask,
// };

// ask.call(lesson1, "What is explicit binding?", 2, 5);
// ask.call(lesson2, "What is explicit binding?");
// ask.apply(lesson1, ["What is explicit binding?", 2, 3]);
// ask.apply(lesson2, ["What is explicit binding?"]);

// explicit hard binding
// =========================================

// const lesson = {
//   teacher: "Kyle",
//   ask(question) {
//     console.log(this.teacher, question);
//   },
// };

// console.log(lesson.ask.bind(lesson));

// console.log(lesson.ask);
// console.log(lesson.ask.bind(lesson));
// window.setTimeout(lesson.ask, 200, "Lost this?");
// setTimeout(lesson.ask.bind(lesson), 300, "Hard bound this?");
// console.log(lesson.ask("srgwegwe"));
// window.setTimeout(lesson.ask("srgwegwe"), 1000, "Lost this?");
// setTimeout(lesson.ask.bind(lesson), 1000, "Hard bound this?");

// window.setTimeout(undefined, 200, "Lost this?");
// =========================================
// const lesson1 = {
//   teacher: "Suzy",
// };

// const lesson2 = {
//   teacher: "Kyle",
//   ask(question) {
//     console.log(this.teacher, question);
//   },
// };

// const callback = lesson2.ask;
// // callback("dkrngrglir");
// setTimeout(callback, 1000, "Lost this?");
// window.setTimeout(callback, 1000, "Lost this?");

// // console.warn("boundCallback = ", boundCallback);
// // boundCallback("kbjlkbl");

// const boundCallback = lesson2.ask.bind(lesson1);

// setTimeout(boundCallback, 1000, "Hard bound this?");
// // window.setTimeout(boundCallback, 2000, "Hard bound this?");

// // this and arrow functions
// =========================================

// const lesson = {
//   teacher: "Kyle",
//   ask(question) {
//     setTimeout(() => {
//       console.log(this);
//       console.log(this.teacher, question);
//     }, 10);
//   },
// };

// lesson.ask("Is this lexical 'this'?");
// lesson.ask.call(window, "Is this lexical 'this'?");

// window.teacher = "Suzy";

// const lesson1 = {
//   teacher: "Kyle",
//   ask(question) {
//     window.setTimeout(this.sayHi.bind({ teacher: "John" }), 10, question);
//   },
//   sayHi(question) {
//     console.log(this.teacher, question);
//   },
// };

// lesson1.ask("Is this lexical 'this'?");
// lesson1.sayHi("Is this lexical 'this'?");

const lesson = {
  teacher: "Kyle",
  ask: (question) => {
    console.log(this);
    console.log(this.teacher, question);
  },
};

lesson.ask("What happened to 'this'?");
lesson.ask.call(lesson, "Still no 'this'?");
