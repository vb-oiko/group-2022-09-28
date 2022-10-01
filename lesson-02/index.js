// оголошення змінних
// var a_zA_Z0_9$;
// var A;
// var _A;
// var $;

// var userId;
// var totalSumBeforeTax;
// var total_sum_before_tax;

// сплив змінних - hoisting
// console.log("c = ", c);

// var b;
// console.log("b = ", b);

// console.log("a = ", a);
// var a = 10;
// b = 5;
// console.log("a = ", a);

// var c;
// c = 15;

// var a = 1,
//   b = 2,
//   c = 3;

// var vs let vs const

// console.log(c);
// let c;
// console.log(c);
// c = 10;

// const a = 1;
// a = 5;

// const c = 5;
// console.log(c);

// область видимості змінних

// типи даних
// console.log("typeof 1 > 1 = ", typeof (1 > 1));
// console.log("typeof false = ", typeof false);
// console.log("typeof 1 = ", typeof 1);
// console.log("typeof NaN = ", typeof NaN);
// console.log("typeof Number('w') = ", Number("w"));
// console.log("typeof -1 / 0 = ", -1 / 0);
// console.log("typeof (1 / 0) = ", 1 / 0);
// console.log("typeof (1 / 0) = ", typeof (1 / 0));
// console.log("typeof \n 'ewfgguhweuf' = ", typeof "ewfgguhweuf");
// console.log('typeof \\ "ewfgguhweuf" = ', typeof "ewfgguhweuf");

// console.log("typeof null = ", typeof null);
// console.log("typeof {} = ", typeof {});
// console.log("typeof undefined = ", typeof undefined);
// console.log("typeof Symbol() = ", typeof Symbol());
// console.log("typeof [] = ", typeof []);
// var a = null;
// console.log("a = ", a);
// console.log(0.1 + 0.2);

// mutation vs reassignment
// const user = {
//   name: "John",
//   age: 30,
// };

// // user = { // reassignment
// //   name: "Jane",
// //   age: 29,
// // };

// console.log(user);
// user.name = "Jane"; //mutation
// user.age = 29; //mutation
// user.job = "Dentist"; //mutation
// console.log(user);

// let arr = [
//   1,
//   false,
//   "new string",
//   {
//     name: "John",
//     age: 30,
//   },
//   undefined,
//   [1, 2, 3],
// ];

// console.log(arr);
// arr = []; // reassignment
// console.log(arr);
// arr[1] = 2; //mutation
// arr[2] = 3; //mutation
// console.log(arr);

// console.log(
//   '{name:"John"} === {name:"John"} = ',
//   { name: "John" } === { name: "John" }
// );

// console.log("{} === {} = ", {} === {});
// console.log("{} == {} = ", {} == {});
// console.log("{} == {} = ", {} == {});

// let arr1 = [];
// let arr2 = [];
// console.log("arr1 == arr2 = ", arr1 === arr2);

// let obj1 = {};
// let obj2 = {};
// console.log("obj1 == obj2 = ", obj1 === obj2);

// let a = 1;
// let b = 1;
// console.log("a === b = ", a === b);

// console.log('5 === "5"', 5 === "5");

// шаблонні рядки

const user = {
  name: "John",
  age: 30,
};

// const a = 2;
// let b = 3;
// let c = b;

const s1 = [1, 2] + 1 + " is " + (user.age + 2) + " years old";
console.log(s1);

// const s2 = `${user.name} is ${user.age * user.age} years old`;
// const s3 = `${[1, 2, 3]} is ${user.age * user.age} years old`;
// const s4 = `${{ user: "name" }} is ${user.age * user.age} years old`;
// console.log(s2);
// console.log(s3);
// console.log(s4);
// console.log([] == "");

// console.log("2" + 2 + 1);
// console.log(1 + 2 + "2");
console.log([1, 2] + 1);
console.log(typeof ([1, 2] + 1));

// PR
