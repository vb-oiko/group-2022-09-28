// Можливі події.
// https://www.w3schools.com/js/js_events.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Event
// https://developer.mozilla.org/en-US/docs/Web/Events
// window.addEventListener("resize", (ev) => console.log(ev.target.innerWidth));

// Фази обробки подій.
// Bubbling
// Capturing

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture

// Делегування подій.
// https://davidwalsh.name/event-delegate

// https://developer.mozilla.org/ru/docs/Learn/JavaScript/Building_blocks/Events

// Об'єкт Event.
// target
// preventDefault
// stopPropagation
// stopImmediatePropagation
// https://www.w3schools.com/jsref/obj_event.asp

// const form = document.querySelector("#form");

// form.addEventListener("submit", (ev) => {
//   ev.preventDefault();
// });

// window.
// об'єкт window
// створення спливаючих вікон
// https://developer.mozilla.org/en-US/docs/Web/API/Window/open
// https://uk.javascript.info/popup-windows
// window.open(
//   "http://127.0.0.1:5500/lesson-14/bubbling.html",
//   "_self",
//   "popup=true"
// );

// location.
// https://www.w3schools.com/js/js_window_location.asp
// properties
// assign()
// replace()
// reload()
// console.warn(window.location);
// window.location.reload();
// const button = document.querySelector("#button");

// button.addEventListener("click", (ev) => {
//   window.location.assign("https://google.com");
//   window.location.replace("https://google.com");
// });

// screen.
// https://www.w3schools.com/js/js_window_screen.asp
// properties
// console.warn(window.screen);

// history.
// https://www.w3schools.com/js/js_window_history.asp
// properties
// back()
// forward()
// console.warn(window.history);

// navigator.
// https://www.w3schools.com/js/js_window_navigator.asp
// properties
// console.warn(window.navigator);

// Планування виконання коду.
// setTimeout

console.warn("???");
setTimeout(() => {
  console.warn("!!!!");
}, 0);
console.warn("++++");

// zero delay
// setInterval
//Ensure that execution duration is shorter than interval frequency
// clearTimeout
// clearInterval

// https://www.w3schools.com/jsref/met_win_settimeout.asp
// https://www.w3schools.com/jsref/met_win_setinterval.asp
// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
// https://developer.mozilla.org/en-US/docs/Web/API/setInterval
