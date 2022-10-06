// Розкласти за цифрами п'ятизначне число
// і вивести у вихідному порядку через пропуск
// методи об'єкту String
// console.log("12345".length);
// console.log("12345".split("3"));
// console.log("Розкласти за цифрами п'ятизначне число".split(" "));
// console.log("Розкласти за цифрами п'ятизначне число".split(""));
// console.log("Розкласти за цифрами п'ятизначне число".includes("цифрами"));
// console.log("Розкласти за цифрами п'ятизначне число".startsWith("Розкласти"));
// console.log("12345".charAt(0));
// const a = "12345";
// console.log(a[0]);
// a[0] = 9;
// console.log(a[0]);
// console.log("9" + a.slice(1, 10));
// console.log("9" + a.slice(1));

// Перетворення типів.
// Явне та неявне перетворення

// let c = prompt("Please enter something");
// console.log(typeof c);

// let a = Number(c);
// console.log(typeof a);

// let b = String(a);
// console.log(typeof b);

// console.log(Boolean(1));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(Infinity));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(""));
// console.log(Boolean(" "));

// Терміни: “унарний”, “бінарний”, “операнд”
// console.log(1 + 2);
// console.log(+"1");

// Перевантаження операторів
// console.log(1 + true);
// console.log("1" + "1");

// Математичні оператори.
// прості арифметичні операції

// console.log(1 + 2);
// console.log(1 - 2);
// console.log(1 / 2);
// console.log(3 * 2);
// console.log(3 ** 2);
// розподіл за модулем (%)
// console.log(5 % 5);
// console.log(Math.abs(-1));
// console.log(Math.ceil(1.1));
// console.log(Math.floor(1.9));
// console.log(Math.round(1.49));
// console.log(Math.round(1.5));
// console.log(Math.max(1, 5));
// console.log(Math.min(1, 5));
// console.log(Math.random());
// console.log(Math.sign(-5));
// console.log(Math.sqrt(9));
// console.log(Math.floor(1.49 * 10) / 10);
// const a = 1.9999999;
// console.log(a.toFixed(2));
// console.log(typeof a.toFixed(2));
// console.log((9.955).toFixed(2));

// Оператори порівняння.

// console.log(2 > 3);
// console.log(22 < 3);
// console.log(2 <= 3);
// console.log(2 >= 3);

// console.log("2" > "3");
// console.log("2" < "3");
// console.log("2" < "22");
// console.log(" " < "3");
// console.log("" < "3");
// console.log("0" < "1");

// console.log(4 < "3");
// console.log(2 < "3");
// console.log(1 < false);
// console.log("22" > 3);
// console.log("2" < 3);

// console.log("abc" < 3);
// console.log(Number("abc"));
// console.log(Number(NaN));
// console.log(NaN > 3);
// console.log(NaN < 3);

// console.log("22" < "3");
// console.log("2" + "2" < "3");
// console.log("aa" < "aaa");
// console.log("aaa" < "aab");
// console.log("aa" < "b");
// console.log("b" < "bb");
// console.log("22" == "3");

// 1
// 11
// 12
// 2
// 20
// aa
// aaa
// aab
// b
// bb

// console.log("22a" < 3);

// Відмінності суворого та не суворого порівняння

// console.log(2 === 2);
// console.log(2 === "2");
// console.log(0 === false);
// console.log(false === false);

// console.log(2 == 2);
// console.log(2 == "2");

// console.log(null == undefined);
// console.log(null == undefined);

// console.log(null == 0);
// console.log(undefined == 0);

// console.log(1 == true);
// console.log(10 == true);
// console.log(Number(true));
// console.log(0 == []);
// console.log(0 == {});
// console.log(1 == {});

// Оператори порівняння

// Логічні оператори.
// truthy vs falsy
// І

// console.log(true && true);
// console.log(true && false);
// console.log(false && false);

// // АБО

// console.log(true || true);
// console.log(true || false);
// console.log(false || false);

// // НЕ (!)
// console.log(!false);
// console.log(!true);

// console.log(!!true);

// // falsy
// console.log(!!0);
// console.log(!!NaN);
// console.log(!!"");
// console.log(!!null);
// console.log(!!undefined);

// //truthy
// console.log(!!-1);
// console.log(!!Infinity);
// console.log(!!"dwefwe");
// console.log(!!{});
// console.log(!![]);

// const a = null;
// if (a) {
//   console.log("a is truthy");
// } else {
//   console.log("a is falsy");
// }

// Short-circuiting

// console.log(true && 2);
// console.log(false && 2);
// console.log(0 && 2);
// console.log(2 && false);
// console.log(undefined && 2);

// console.log(true || 2); // true
// console.log(false || 2); // 2
// console.log(0 || 2); // 2
// console.log(2 || false); // 2
// console.log(undefined || 2); // 2

// Скорочені арифметичні оператори.

// let a = 1;
// a += 5;
// console.log(a);
// a *= 5;
// console.log(a);
// a /= 5;
// console.log(a);

// Скорочені оператори

// let b = "ddd";
// b += " ccc";
// b = b + " ccc";
// console.log(b);

// 7 (10) === 111 (2)
// 3 (10) === 11 (2)
// 14 (10) === 1110 (2)
// console.log(7 >> 1);
// console.log(7 << 1);

// Унарні оператори.
// унарний плюс і унарний мінус

// console.log(-(-2));
// console.log(+"2");
// console.log(+"2aefge");
// console.log(typeof NaN);
// const a = "12345";
// console.log(+a);
// console.log(-a);

// інкремент і декремент (постфіксна і префіксна форми)

// let a = 1;
// console.log(a++);
// console.log(a);

// let b = 1;
// console.log(++b);
// console.log(b);

// let c = 1;
// console.log(c++);
// console.log(c);

// let d = 1;
// console.log(5 + ++d);
// console.log(d);

// c++;
// c += 1;
// c = c + 1;

// Пріоритет операторів.

console.log(2 + 2 + "2" > 1);
console.log(42 > 1);
console.log("42" > 1);
console.log(2 + 2 + +"2");
console.log(4 + "2");
console.log(2 + 2);
console.log(2 + 2 ** 3);

// console.log(1 + 2 * 3);
// console.log(1 + 2 - 3);
// console.log(1 + 2 - 3);
// console.log(1 + (2 - 3));

// Правила та порядок виконання операторів
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// https://uk.javascript.info/operators#prioritet-operatora
