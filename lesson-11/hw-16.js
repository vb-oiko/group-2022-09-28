// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Ступінь передається як другий аргумент у функцію
// pow (num, degree)

function pow(num, degree) {
  if (degree === 0) {
    return 1;
  }

  if (degree > 0) {
    return num * pow(num, degree - 1);
  }

  if (degree < 0) {
    return 1 / pow(num, -degree);
  }
}

console.warn(pow(2, 0));
console.warn(pow(2, 2));
console.warn(pow(2, -1));
console.warn(pow(2, -2));
