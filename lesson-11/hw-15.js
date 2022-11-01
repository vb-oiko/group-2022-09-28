// Створити функцію, яка прибирає з рядка всі символи,
// які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач

function strip(str, charArr) {
  return charArr.reduce((acc, char) => {
    return acc.replaceAll(char, "");
  }, str);
}

function strip1(str, charArr) {
  let result = str;

  for (char of charArr) {
    result = result.replaceAll(char, "");
  }

  return result;
}

function strip1(str, charArr) {
  let srcArr = str.split("");
  let result = [];

  for (char of srcArr) {
    if (!charArr.includes(char)) {
      result.push(char);
    }
  }

  return result.join();
}

console.warn(strip(" hello world", ["l", "d"]));
