// Написати функцію, яка приймає 1 параметр.
// з тим, що передали перший раз і т. д.
// Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28

function build() {
  let acc = 0;
  return function sum(a) {
    acc += a;
    return acc;
  };
}

const sum = build();

console.warn(sum(3));
console.warn(sum(5));
console.warn(sum(20));
