// ще раз про лексичне оточення та контекст

// const lesson1 = {
//   teacher: "Kyle",
//   ask(/* this, */ question) {
//     setTimeout(() => {
//       console.log(this.teacher, question);
//     }, 10);
//   },
// };

// lesson1.ask("Is this lexical 'this'?");

// const lesson2 = {
//   teacher: "Kyle",
//   ask: (question) => {
//     // no this
//     console.log(this.teacher, question);
//   },
// };

// lesson2.ask("What happened to 'this'?");

// Функції-конструктори.
// синтаксис
// приклади використання
// Прототипне успадкування.
// https://www.w3schools.com/js/js_object_prototypes.asp

// function Human(/* this,*/ name) {
//   this.name = name;
//   this.sayBye = function () {
//     console.warn(`Bye, ${this.name}`);
//   };
// }

// Human.prototype.sayHi = function sayHi(/*this*/) {
//   console.warn(`Hi, ${this.name}`);
// };

// const sherlock = new Human("Sherlock");
// const john = new Human("John");
// sherlock.occupation = "detective";
// john.job = "doctor";

// console.warn(Human.prototype);
// console.log(sherlock.__proto__);
// console.log(sherlock.prototype);

// Human.prototype.sayHello = function () {
//   console.warn(`Hello, ${this.name}`);
// };

// Human.prototype.age = 0;

// console.warn(Human.prototype);
// sherlock.sayHello();

// console.warn(sherlock.age);
// console.warn(john.age);

// Object.prototype.name = "Suzy";
// Human.prototype.sayHi(); //undefined

// sherlock.sayHi();
// sherlock.sayHi.call(sherlock);

// john.age = 30;

// console.warn(sherlock.age);
// console.warn(john.age);

// Human.prototype.age = 42;

// console.warn(sherlock.age);
// console.warn(john.age);

// Object.prototype.age2 = 53;

// const jane = {};
// console.warn(jane.age2);

// console.warn(Human.prototype.age3);

// console.warn(Object);
// console.warn(Object.prototype);
// console.log(sherlock);
// console.log(sherlock.toString());
// console.warn(sherlock["name"]);
// sherlock.sayHi();

// оператор instanceof

// function Human(name) {
//   this.name = name;
//   return "Human";
// }

// Human.prototype.sayHi = function sayHi() {
//   console.warn(`Hi, ${this.name}`);
// };

// const sherlock = new Human("Sherlock");

// console.warn(sherlock.__proto__.constructor === Human);
// console.warn(sherlock instanceof Human);
// console.warn(sherlock instanceof Object);

// Відмінність Prototype від __proto__.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#instance_properties

// Створення об'єкта з певним прототипом.
// Варіанти створення об'єкта з встановленим прототипом
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create

// function Human(name) {
//   this.name = name;
// }

// Human.prototype.sayHi = function sayHi() {
//   console.warn(`Hi, ${this.name}`);
// };

// const sherlock = new Human("Sherlock");

// const john = Object.create(Human.prototype);

// console.warn(john);
// john.sayHi();

// Присвоєння об'єкту прототипу вже створеному об'єкту.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf

// const john = {
//   name: "John",
//   lastName: "Watson",
// };

// console.warn(john);
// console.warn(john.sayHi);

// Object.setPrototypeOf(john, sherlock);
// console.warn(john);
// john.sayHi();

// Object.hasOwnProperty.

// function Human(name) {
//   this.name = name;
// }

// Human.prototype.sayHi = function sayHi() {
//   console.warn(`Hi, ${this.name}`);
// };

// const sherlock = new Human("Sherlock");
// const john = new Human("John");

// john.lastName = "Watson";

// console.log(john.hasOwnProperty("name"));
// console.log(john.hasOwnProperty("lastName"));
// console.log(john.hasOwnProperty("sayHi"));

// Object.hasOwnProperty.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

// Додавання та видалення властивостей/методів в об'єкті.
// Object.defineProperty.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

// const obj = {};
// obj.a = 1;
// obj["b"] = 2;
// const prop = "c";
// obj[prop] = 4;

// Object.defineProperty(obj, "d", {
//   value: 6,
//   writable: false,
//   enumerable: false,
//   configurable: true,
// });
// console.warn(obj);
// obj.d = 10;
// // delete obj.d;
// console.warn(obj);

// for (key in obj) {
//   console.warn(key);
// }

// console.log(obj.hasOwnProperty("d"));
// видалення через оператор delete

// Геттери та Сеттери в об'єктах.
// get
// set

const obj = {
  innerValue: 0, // private

  set value(val) {
    if (val < 0) {
      console.log("value is below zero: ", val);
      return;
    }

    console.warn("value is set");
    this.innerValue = val;
  },

  get value() {
    console.warn("value is get");

    return `USD${this.innerValue}`;
  },
};

obj.value = 100;
console.warn(obj.value);
obj.value = -100;
// console.warn(obj.value);
// console.warn(obj);

// console.warn(obj.hasOwnProperty("value"));
// console.warn(obj.hasOwnProperty("innerValue"));

// Основні поняття ООП.
// Визначення ООП та основних постулатів, сфери застосування
// encapsulation, inheritance, polymorphism

// https://frontend-stuff.com/blog/object-oriented-programming/

// class constructors.
// Класові конструктори, функція super

// Спадкування в classes.
// Ключове слово extends

// Робота з class.
// Порівняння зручності роботи з класами та роботи з прототипами безпосередньо

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes
// https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript-ru

// Статичні властивості та методи в classes.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_properties

// Копіювання об'єктів та масивів.
// копіювання об'єкта або масиву
// глибока копія

// Object.freeze, Object.seal.
// https://www.geeksforgeeks.org/what-is-the-difference-between-freeze-and-seal-in-javascript
