// Планування виконання коду.
// setTimeout

// console.warn("???");
// const timeoutId = setTimeout(() => {
//   console.warn("!!!!");
// }, 1000);
// console.warn("++++");

// console.warn(`id: ${timeoutId}`);

// clearTimeout(timeoutId);

// for (let index = 0; index < 3; index++) {
//   setTimeout(() => {
//     console.log(index);
//   }, 1000);
// }

// zero delay
// setInterval

// let i = 0;

// const intervalId = setInterval(() => {
//   // slow code, async call to BE
//   console.warn(i);
//   i++;
// }, 100);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);

// let i = 0;

// function log() {
//   if (i === 10) {
//     return;
//   }
//   setTimeout(() => {
//     // slow code, async call to BE
//     console.warn(i);
//     i++;
//     log();
//   }, 500);
// }

// log();

//Ensure that execution duration is shorter than interval frequency
// clearTimeout
// clearInterval
// https://www.w3schools.com/jsref/met_win_settimeout.asp
// https://www.w3schools.com/jsref/met_win_setinterval.asp
// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
// https://developer.mozilla.org/en-US/docs/Web/API/setInterval

// Основні елементи керування
// form
// input
// select
// textarea
// button
// https://www.w3schools.com/html/html_form_elements.asp

// Базові навички роботи з елементами управління з JS
// https://www.javascripttutorial.net/javascript-dom/javascript-form/
// document.forms

// console.warn(document.forms);
// console.warn(document.forms[0]);
// console.warn(document.forms.form1);

// const form = document.forms.form1;

// console.warn(form.action);
// console.warn(form.method);

// action and method attributes
// submit() and reset()
// form.elements[index, name or id]
// const elements = form.elements;
// console.warn(elements);
// console.warn(elements[1]);
// console.warn(elements["isFragile1"]);
// console.warn(elements["isFragile2"]);

// form.addEventListener("submit", (ev) => {
//   if (elements.product.value === "fuck") {
//     ev.preventDefault();
//     console.warn("!!");
//     return;
//   }
//   if (elements.product.value === "fuck1") {
//     console.warn("!!");
//     return;
//   }
//   form.submit();
// });

// 'submit' event
// preventDefault()

// Checkboxes
// використання checkboxes
// визначення які checkboxes вибрані
// https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/
// .checked = false;
// setAttribute("checked", "");

// Select
// робота з select (with multiple)
// визначення яких опцій вибрано
// https://www.javascripttutorial.net/javascript-dom/javascript-select-box/
// selectedIndex and value
// selected, value, text

// Date
// String
// Math

// console.warn(Date.now());
// const now = new Date();
// console.warn(now.getDate());
// console.warn(now.getFullYear());
// console.warn(now.getHours());
// console.warn(now.getUTCHours());

// moment.js
// date-fns

// const date2 = new Date();
const date2 = new Date(2022, 0, 20);
const date1 = new Date();
date1.setFullYear(2022);
date1.setMonth(0);
date1.setDate(20);
date1.setHours(0);
// date1.setMinutes(0);
// date1.setSeconds(0);
// date1.setMilliseconds(0);

console.warn(date2);
console.warn(date1);
// date1.setMonth(date1.getMonth() + 20);

// console.warn(date1);
// console.warn(date1);

// console.warn(Math);

// const str = "egwegwegw";

// ASCII 0 ... 255
// UTF-8
