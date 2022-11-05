// Порядок виконання та обробка помилок
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
// https://www.w3schools.com/js/js_errors.asp
// try…catch, etc
// // throw, finally
// try {
//   throw new Error("message");
//   // open file

//   // write to DB
// } catch (err) {
//   console.warn(err);
// } finally {
//     // close file
// }

// JavaScript Exception Handling: Patterns & Best Practices
// https://blog.bitsrc.io/javascript-exception-handling-patterns-best-practices-f7d6fcab735d
// не зловживайте try…catch блоками
// якщо використовуєте try…catch блок з асинхронними функціями додавайте завжди await
// не використовуйте try…catch для управління ходом виконання програми
// використовуйте віддалене логування

// Unit-тестування
// огляд підходу
// приклади з Jest
// https://www.browserstack.com/guide/unit-testing-in-javascript
// https://www.youtube.com/watch?v=IEDe8jl5efU

// Що таке DOM?.
// https://developer.mozilla.org/uk/docs/Web/API/Document
// https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core
// https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom
// ﻿https://www.dynamicwebtraining.com.au/blog/javascript-dom-methods

// Отримання елементів за допомогою DOM-методів.
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagNameNS
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

// Створення/видалення елементів з DOM.
// https://developer.mozilla.org/en-US/docs/Web/API/Document#instance_methods

// Керування атрибутами та вмістом DOM-елементів.
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model#dom_interfaces

// Додавання обробників-подій DOM-елементам.
// Спосіб додавання обробників:
// як атрибут у HTML
// як властивість DOM об'єкту
// addEventListener
// https://www.w3schools.com/js/js_htmldom_eventlistener.

// add DOM element
// remove DOM element
// show/hide element
// onHover
// change src attribute

// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#creating_an_html_table_dynamically
// https://developer.mozilla.org/en-US/docs/Web/Events

const input = document.createElement("input");
input.classList.add("input");

const button = document.createElement("button");
button.innerText = "Submit";
// button.innerHTML = "<span>Submit</span>";
button.setAttribute("type", "button");

const container = document.querySelector(".container");

// container.append(input, button);
container.appendChild(input);
container.appendChild(button);

const handleInput1 = (ev) => {
  console.warn("1", ev.target.value);
};

const handleInput2 = (ev) => {
  const value = ev.target.value;
  if (value === "") {
    button.setAttribute("disabled", "");
    return;
  }
  button.removeAttribute("disabled");
};

const handleClick = () => {
  console.warn(input.value);
  //   button.style.backgroundColor = "red";
  //   button.remove();
};

button.addEventListener("click", handleClick);

// input.oninput = handleInput1;
// input.oninput = handleInput2;
// input.addEventListener("input", handleInput1);
input.addEventListener("input", handleInput2);

if (input.value === "") {
  button.setAttribute("disabled", "");
}
