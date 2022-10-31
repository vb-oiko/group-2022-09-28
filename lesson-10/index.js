// Основні поняття ООП.
// Визначення ООП та основних постулатів, сфери застосування

// abstraction
// encapsulation
// inheritance
// polymorphism

// https://frontend-stuff.com/blog/object-oriented-programming/

// class constructors.

// class Shape {
//   constructor(color) {
//     this.color = color;
//   }

//   logColor() {
//     console.log(this.color);
//   }

//   render() {
//     console.log("render shape");
//   }
// }

// class Dot extends Shape {
//   constructor(color) {
//     super(color);
//   }

//   render() {
//     console.log("render dot");
//   }
// }

// class Box extends Shape {
//   constructor(color, width, height) {
//     super(color);
//     this.width = width;
//     this.height = height;
//   }

//   render() {
//     console.log("render box");
//   }
// }

// class Circle extends Shape {
//   constructor(color, radius) {
//     super(color);
//     this.radius = radius;
//   }

//   render() {
//     console.log("render circle");
//   }
// }

// class Ring extends Circle {
//   constructor(color, radius, innerRadius) {
//     super(color, radius);
//     this.innerRadius = innerRadius;
//   }

//   render() {
//     console.log("render ring");
//     super.render();
//   }
// }

// const dot = new Dot("black");
// const box = new Box("green", 100, 20);
// const circle = new Circle("yellow", 50);
// const ring = new Ring("red", 100, 80);

// const shapes = [dot, box, circle, ring];
// shapes.forEach((shape) => shape.logColor());
// shapes.forEach((shape) => shape.render());

// Класові конструктори, функція super

// Геттери та Сеттери в об'єктах та класах.
// get
// set

// const API_URL = "https://api.example.com";

// class FancyNumber {
//   #_value;

//   static API_URL = "https://live.api.test.com";

//   constructor(val) {
//     this.#_value = val;
//     this.name = "";
//     // return this
//   }

//   getUsers() {
//     console.warn(API_URL);
//   }

//   updateUser() {}

//   set value(val) {
//     this.#_value = val;
//   }

//   get value() {
//     return `*** ${this.#_value} ***`;
//   }

//   static copy(num) {
//     return new FancyNumber(num.value);
//   }
// }

// function copyFancyNumber(num) {
//   return new FancyNumber(num.value);
// }

// const num = new FancyNumber(0);
// num.value = 5;
// console.warn(num.value);
// console.warn(num._value);

// num.getUsers();

// num1 = new FancyNumber(5);
// console.warn(FancyNumber.a);
// FancyNumber.a = 10;
// console.warn(num.a);

// const num2 = FancyNumber.copy(num1);

// Робота з class.
// Порівняння зручності роботи з класами та роботи з прототипами безпосередньо

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes
// https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript-ru

// Спадкування в classes.
// Ключове слово extends

// Статичні властивості та методи в classes.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_properties

// Копіювання об'єктів та масивів.
// копіювання об'єкта або масиву
// глибока копія
// const obj1 = { a: 5 };

// const obj2 = { b: 5, obj: obj1 };
// const obj4 = { b: 5, obj: obj1 };
// const obj3 = Object.assign({}, obj2);

// console.warn(obj3 === obj2);

// console.log(obj2);
// console.log(obj3);
// obj2.obj.a = 10;
// console.log(obj2);
// console.log(obj3);

const obj1 = { a: 5 };

const arr1 = [1, 2, 3, obj1];
const arr2 = [1, 2, 3, obj1];
const arr3 = arr1;

// console.warn(arr1 === arr2);
// console.warn(arr1 === arr3);

arr1[3].a = 10;
console.warn(arr1);
console.warn(arr2);

// console.warn(arr1);
// console.warn(arr2);
