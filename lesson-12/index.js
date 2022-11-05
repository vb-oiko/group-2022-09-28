// use strict
// Особливості "суворого" режиму
// https://www.w3schools.com/js/js_strict.asp
// sloppy mode - неохайний
// strict mode "scope" script/function/module/class

// changes converting mistakes into errors (as syntax errors or at runtime)
// - Assigning to undeclared variables
// x = 10;
// - Failing to assign to object properties
// - Failing to delete object properties
// - Duplicate parameter names
// - Legacy octal literals (0644 === 420) / 0o prefix
// - Setting properties on primitive values
// (5).name = "wgw4";
// - Duplicate property names / this restriction was removed in ES2015.
// const a = {
//   a: 5,
//   a: 6,
//   ["a" + "d"]: 60,
// };

// changes simplifying how variable references are resolved
// - Removal of the with statement
// with (a) {
//   ad: 70;
// }
// - Non-leaking eval
// eval("y=10");
// console.warn(y);
// - Block-scoped function declarations
// if (true) {
//     function name(params) {

//     }
// }

// Making eval and arguments simpler
// - Preventing binding or assigning eval and arguments
// - No syncing between parameters and arguments indices

// changes making it easier to write "secure" JavaScript
// - No this substitution
// - Removal of stack-walking properties
// function fn() {
//     this.caller.this
// }
// console.warn(fn.caller);
// fn();

// changes anticipating future ECMAScript evolution.
// - Extra reserved words

// JSON
// JSON for beginners
// https://www.youtube.com/watch?v=GpOO5iKzOmY
// https://www.json.org/json-en.html
// різниця між JSON та обʼєктами
// const obj = {
//   a: 10,
//   b: "erjgere",
//   c: true,
//   d: () => {},
//   e: [],
// };

// const str = JSON.stringify(obj);
// const obj2 = JSON.parse(str);
// console.warn(str);
// console.warn(obj2);

// Налагодження коду (debugging)
// Дебагінг через:

// chrome dev tools
// debugger
// console.log
// const array = [1, 2, 3, 4];

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   //   debugger;
//   console.warn(element);
// }

// Coding best practices
// no global scope usage
// use strict
// strict equal === vs ==
// each entity in different file
// airbnb coding style: https://github.com/airbnb/javascript#table-of-contents

// Принципи проектування
// KISS keep it simple, stupid
// DRY don't repeat yourself

// Основні принципи та правила рефакторингу

// Чистий код
// - Чистий код проходить усі тести
// - Чистий код очевидний для інших програмістів
// - Чистий код не містить дублювання
// - Чистий код містить мінімум класів та інших рухомих частин
// - Чистий код легше і дешевше підтримувати!
// Технічний борг
// Як робити рефакторинг
// - Код повинен стати чистішим
// - В процесі рефакторингу НЕ створюється нова функціональність
// - Всі існуючі тести повинні успішно проходити
// https://refactoring.guru/uk/refactoring/what-is-refactoring
// code smell

// Огляд популярних бібліотек та фреймворків
// Бібліотеки та фреймворки - оглядове заняття
// Відмінності бібліотеки від фреймворку
// frameworks
// Ember.js
// AngularJS
// Vue.js

// Node.js
// Express.js

// Next.js / Nuxt.js
// Gatsby
// Meteor.js

// Mocha.js / Jest

// libraries
// Svelte.js
// React.js
// Preact
// Chart.js
// D3.js
// lodash.js/underscore.js
// Three.js
// Leaflet
// Moment.js / date-fns.js / https://github.com/you-dont-need/You-Dont-Need-Momentjs
// Popper.js
// Lit / Polymer.js / Stencil.js
