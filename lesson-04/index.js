// Теми завтрашнього заняття:
// Примітивні типи.
// іммутабельність

// const str = "sjgsejfjwegoweo";
// console.log(str[4]);
// str[4] = "A";
// console.log(str[4]);

// Посилальний тип.
// Array
// const arr = [1, 2, 3];
// console.log(arr);
// arr[1] = 5;

// console.log(arr);
// console.log(arr.length);
// console.log(arr === arr2);

// Object

// let a = 5;
// console.log(typeof a); // number
// a = "fgdfhgdrhg";
// console.log(typeof a); // string

// let mySalary = 10;
// console.log(mySalary);
// function raiseSalary(salary) {
//   salary = salary + 10;
//   console.log(salary);
// }
// raiseSalary(mySalary);
// console.log(mySalary);

// let myBonus = { amount: 10 };
// console.log(myBonus);
// function raiseBonus(bonus) {
//   bonus.amount = bonus.amount * 2;
// }
// raiseBonus(myBonus);
// console.log(myBonus);

// const arr = [1, 2, 3];
// console.log(arr);
// function myFunc(arr) {
//   arr.push(4);
// }
// myFunc(arr);
// console.log(arr);

// let salary = 10;

// function raiseBonus(bonus) {
//   bonus.amount = bonus.amount * 2;
//   console.log(bonus.amount);
//   return bonus.amount;
// }
// console.log(raiseBonus(salary));
// console.log(salary);

// boxing of primitive values
// Number(10).amount = 20;

// console.log("sgweeeg".length);
// console.log(String("sgweeeg").length);

// const obj = {};
// obj.amount = 20;
// console.log(obj);
// console.log(obj.salary);

// const sherlock = { name: "Holmes", address: { city: "London" } };
// // const john = { name: "Watson", address: sherlock.address };
// const john = { name: "Watson", address: { city: "London" } };
// console.log(sherlock);
// console.log(john);
// john.address.city = "Miami";
// console.log(sherlock);
// console.log(john);

// Умовна конструкція if/else if/else.
// https://developer.ozilla.org/ua/docs/Web/JavaScript/Reference/Statements/if...else
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// dangling else
// assignment operator in condition

// const a = 0;
// const b = 5;

// const SECONDS_IN_HOUR = 3600;

// const TIMEOUT_MS = 500;
// const NUMBER_OF_TRIES = 5;

// const c = 5;

// const d = c * SECONDS_IN_HOUR;

// if (a) {
//   if (b) {
//     console.log(b);
//   }
// } else {
//   console.log(a);
// }

// Умовна конструкція switch/case.
// https://uk.javascript.info/switch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// fall-through

// const operation = "add";
// let a = 4;
// let b = 5;
// let result = 0;

// switch (operation) {
//   case "add":
//     result = a + b;
//     console.log(result);
//     break;
//   case "subtract":
//     result = a - b;
//     break;
//   default:
//     console.log("wrong operation");
// }

// const age = 21;

// switch (
//   age //
// ) {
//   case 21:
//     console.log("alcohol");
//   case 18:
//     console.log("cigarettes");
//   default:
//     console.log("juice");
// }

// console.log(result);

// function calc(operation, a, b) {
//   if (operation === "add") {
//     return a + b;
//   }

//   if (operation === "subtract") {
//     return a - b;
//   }

//   console.log("wrong operation");
// }

// a = +prompt("1st var");
// b = +prompt("2st var");
// op = prompt("operation");

// console.log(calc(op, a, b));

// Тернарний оператор.
// https://uk.javascript.info/ifelse#umovnii-operator
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// chaining

// const age = 22;

// const bag1 = age >= 21 ? "alcohol" : "juice";

// const bag2 = age < 18 ? "juice" : age < 21 ? "alcohol" : "cigarettes";

// const a = '' ?? 3;

// console.log(bag1);
// console.log(bag2);

// Введення в цикли.
// визначення циклу
// приклади циклів у житті
// ітерації
// умова виходу з циклу
// https://developer.mozilla.org/uk/docs/Web/JavaScript/Guide/Loops_and_iteration

// Види циклів.
// з передумовою

// Цикл while.
// https://uk.javascript.info/while-for#cikl-while
// const arr = [1, 2, 3, 4, 5];

// let i = 0;
// while (i < arr.length) {

//   console.log(arr[i] * 2);
//   i++;
// }

// Цикл do while.
// https://uk.javascript.info/while-for#cikl-do-while

// з постумовою

// const arr = [];

// let i = 0;
// do {
//   console.log(arr[i]);

//   i++;
// } while (i < arr.length);
// Цикл for.
// https://uk.javascript.info/while-for#cikl-for

// const arr = [1, 2, 3, 4, 5];

// for (let i = 0, j = 1; i <= 10; i++, j = j * 2) {
//   console.log(i, j);
// }

for (let i = 0; i <= 10; i++) {
  console.log(i, 2 ** i);
}
