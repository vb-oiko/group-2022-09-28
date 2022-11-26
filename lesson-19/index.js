"use strict";
// Початок роботи з NPM
// що таке Npm
// навіщо потрібен
// демо package.json та можливі властивості
// npm scripts
// npm scripts
// навіщо вони потрібні
// приклади використання
//

// EcmaScript
// екскурс в історію EcmaScript
// версійність
//

// ECMAScript-features-list

// Babel
// використання babel-транспілятора на проекті
// конфігурація
//  пресети

// Getting Started With Babel

// Rest оператор

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// rest parameters vs arguments object
// arguments object is not a real array
// The arguments object has additional functionality specific to itself
// arguments object contains all of the parameters — including the parameters in the ...restParam array

// function sum(a, b, ...rest) {
//   console.log(rest);
//   console.log(arguments);
//   rest.forEach(() => {});
// }

// sum(1, 2);
// sum(1, 2, 3, 4, 5, 6);

// Spread оператор
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// function arguments
// array literals
// object literals
// obj from arr spread
// copy arr or obj (shallow!)
// concatenate arr or obj
// null and undefined
// adding props conditionally

// const arr1 = [1, 2, 3, 4];

// const arr2 = ["apple", "banana", ...arr1, [10, 20]];

// console.warn(arr2);
// console.warn(...arr2);
// console.warn(5, 6, 1, 2, 3, 4);

// const b = ...arr2; // error!

// const obj1 = { a: 10, b: 20 };

// const obj2 = { c: "tttt", ...obj1 };

// const obj3 = { ...arr2 };

// console.warn(obj3);

// const arr4 = [...arr2];
// const obj4 = { ...obj3 };

// console.warn(arr4);
// console.warn(obj4);
// console.warn(obj4);
// obj3[6] = 100;
// console.warn(obj4);
// console.warn(obj3);

// let arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];
// arr1 = [...arr1, ...arr2];
// console.warn(arr3);
// console.warn(arr1);

// const obj1 = { a: 10, b: 20 };

// const obj2 = { c: "tttt" };

// const a = undefined;
// const b = null;

// const obj3 = { ...obj1, ...obj2, ...a, ...b };
// console.warn(obj3);

// const condition = false;

// const obj = {
//   a: 10,
//   b: condition ? 42 : undefined,
// };

// console.warn(obj);

// const obj1 = {
//   a: 10,
//   ...(condition ? { b: 42 } : null),
// };

// console.warn(obj1);

// const str = "wegwefwe";
// const arr = [...str];
// console.warn(...str);

// Деструкція
// Особливості деструктивного присвоєння та приклади використання
// destructuring assignment
// Setting default values
// Nested object destructuring
// Destructuring function arguments
// Swapping variables
// let a = 5;
// let b = 10;

// [a, b] = [b, a];
// console.warn(a, b);
// Parsing an array returned from a function
// Ignoring some returned values
// Computed object property names and destructuring
// Invalid JavaScript identifier as a property name
// const propName = "data-query-id";
// const obj = { "data-id": 5, "data-query-id": 42 };
// const { ["data-id"]: dataId, [propName]: prop } = obj;
// console.warn(dataId);
// console.warn(prop);

// const dataId = obj['data-id']
// const prop = obj[propName]

// obj.b = 20;
// obj["data-item-id"] = 30;

// const obj = {
//   user_id: 10,
//   user_name: "John",
//   roles: { system_user: true },
//   middle_name: "Watson",
// };
// // const user_id = obj.user_id;
// // const user_name = obj.user_name;
// const {
//   user_id,
//   user_name,
//   roles: { system_user },
// } = obj;
// // const userId = obj.user_id;
// // const userName = obj.user_name;
// // const systemUser = obj.roles.system_user;
// const {
//   user_id: userId,
//   user_name: userName,
//   roles: { system_user: systemUser },
//   middle_name: middleName = "Snow",
// } = obj;

// console.warn(userId, userName, systemUser, middleName);

// const MyComponent = (props) => {
//   console.warn(props.userName);
//   console.warn(props.middleName);
//   console.warn(props.lastName);
//   return null;
// };

// const MyComponent1 = ({ userName, middleName, lastName }, arg1) => {
//   console.warn(userName);
//   console.warn(middleName);
//   console.warn(lastName);
//   return null;
// };

// const arr1 = [1, 2, 3, 4, 5];

// const a1 = a[0]
// const a2 = a[2]
// const rest = ???

// const [a1, , a2, ...rest] = arr1;

// console.warn(a1, a2, rest);

// const [value, setValue] = React.useState("");

// https://www.javascripttutorial.net/es6/javascript-object-destructuring/

// Set
// структура даних Set :
// додавання
// видалення
// пошук
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set

// Map
// структура даних Map :
// додавання
// видалення
// пошук
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// https://leetcode.com/problems/valid-anagram/

// https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
