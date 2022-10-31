// ще раз про лексичне оточення та контекст

const lesson1 = {
  teacher: "Kyle",
  ask(/* this, */ question) {
    setTimeout(() => {
      console.log(this.teacher, question);
    }, 10);
  },
};

lesson1.ask("Is this lexical 'this'?");

const lesson2 = {
  teacher: "Kyle",
  ask: (question) => {
    // no this
    console.log(this.teacher, question);
  },
};

lesson2.ask("What happened to 'this'?");
lesson2.ask.call(lesson2, "Still no 'this'?");

// ==================================

// Функції-конструктори.
// Прототипне успадкування.
// https://drive.google.com/file/d/1s_M_1DjwffCsUJu4ZLdj6C5kWtH2NiAA/view?usp=sharing

function Human(name) {
  this.name = name;
  return "Human";
}

Human.prototype.sayHi = function sayHi() {
  console.warn(`Hi, ${this.name}`);
};

const sherlock = new Human("Sherlock");
// 4 steps of new operator

console.warn("Object.prototype = ", Object.prototype);
console.warn("Object.prototype.constructor = ", Object.prototype.constructor);

console.warn("Human.prototype = ", Human.prototype);
console.warn("sherlock.constructor = ", sherlock.constructor);

console.warn("sherlock.__proto__ = ", sherlock.__proto__);
console.warn(
  "Object.getPrototypeOf(sherlock) = ",
  Object.getPrototypeOf(sherlock)
);

console.warn(sherlock);
console.warn(sherlock instanceof Human);
console.warn(sherlock instanceof Object);

console.warn(Human);

// Створення об'єкта з певним прототипом.
function Human(name) {
  this.name = name;
  return "Human";
}

Human.prototype.sayHi = function sayHi() {
  console.warn(`Hi, ${this.name}`);
};

const sherlock = new Human("Sherlock");

const john = Object.create(Human.prototype, {
  name: { value: "John" },
  lastName: { value: "Watson" },
});

console.warn(john);
john.sayHi();

// Присвоєння об'єкту прототипу вже створеному об'єкту.

const john = {
  name: "John",
  lastName: "Watson",
};

Object.setPrototypeOf(john, sherlock);
console.warn(john);
john.sayHi();

// Object.hasOwnProperty.

console.log(john.hasOwnProperty("name"));
console.log(john.hasOwnProperty("lastName"));
console.log(john.hasOwnProperty("sayHi"));

// Додавання та видалення властивостей/методів в об'єкті.
// видалення через оператор delete

delete john.name;

console.warn(john);

Object.defineProperty(john, "name", { value: "John" });
console.warn(john);

// Геттери та Сеттери в об'єктах.
// get
// set

const fancyNumber = {
  _value: 0,
  set value(value) {
    this._value = value;
  },
  get value() {
    return `$${this._value * 100}`;
  },
};

fancyNumber.value = 5;
console.warn(fancyNumber.value);

// OOP, classes
// ====================================

class Shape {
  constructor(color) {
    this.color = color;
  }

  logColor() {
    console.log(this.color);
  }

  render() {
    console.log("render shape");
  }
}

class Dot extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    console.log("render dot");
  }
}

class Box extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  render() {
    console.log("render box");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  render() {
    console.log("render circle");
  }
}

class Ring extends Circle {
  constructor(color, radius, innerRadius) {
    super(color, radius);
    this.innerRadius = innerRadius;
  }

  render() {
    console.log("render ring");
  }
}

const dot = new Dot("black");
const box = new Box("green", 100, 20);
const circle = new Circle("yellow", 50);
const ring = new Ring("red", 100, 80);

const shapes = [dot, box, circle, ring];
shapes.forEach((shape) => shape.logColor());
shapes.forEach((shape) => shape.render());

// Копіювання об'єктів та масивів.
// копіювання об'єкта або масиву
// глибока копія

const obj1 = { a: 5 };

const obj2 = { b: 5, obj: obj1 };
const obj3 = { ...obj2 };

console.log(obj2);
console.log(obj3);
obj2.obj.a = 10;
console.log(obj2);
console.log(obj3);

// Object.freeze, Object.seal.
// seal can't add or delete

const obj1 = { a: 5, b: { c: 5 } };
Object.freeze(obj1);
obj1.a = 6;
delete obj1.a;
obj1.d = 10;
obj1.b.c = 20;

// console.warn(obj1);
