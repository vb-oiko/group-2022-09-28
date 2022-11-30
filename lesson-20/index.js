// Set
// структура даних Set :
// додавання
// видалення
// пошук
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set
// const set = new Set([1, 3, 4, "test"]);
// console.warn(set.keys());
// console.warn(set.values());
// set.add(8);
// set.add(8);
// console.warn(set);
// console.warn(set.has(9));
// console.warn(set.delete(8));
// console.warn(set);

// const arr = [1, 1, 4, 5, 6, 7, 3, 4, 2, 3, 8, 9];
// const arr2 = Array.from(new Set(arr));
// const arr3 = [...new Set(arr)];
// console.warn(arr3);

// Map
// структура даних Map :
// додавання
// видалення
// пошук
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// https://leetcode.com/problems/valid-anagram/

// const map = new Map();
// map.set("a", 5);
// map.set("b", 2);

// console.warn(map);
// console.warn(map.has("c"));
// map.delete("a");
// console.warn(map);
// console.warn(map.get("b"));
// console.warn(map.get("c"));

// const isAnagram = (s, t) => {
//   const sMap = new Map();
//   const tMap = new Map();

//   for (const key of s) {
//     sMap.set(key, sMap.has(key) ? sMap.get(key) + 1 : 1);
//     // console.warn(sMap);
//   }

//   for (const key of t) {
//     tMap.set(key, tMap.has(key) ? tMap.get(key) + 1 : 1);
//   }
//   console.warn(sMap);
//   console.warn(tMap);

//   console.warn(sMap.keys());
//   for (const key of sMap.keys()) {
//     if (sMap.get(key) !== tMap.get(key)) {
//       return false;
//     }
//   }

//   return true;
// };

// console.warn(isAnagram("anagram", "nagaram"));
// console.warn(isAnagram("rat", "car"));

// Map vs Object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps

// const obj = { 5: true };
// obj["5"] = false;
// console.warn(obj);
// console.warn(Object.keys(obj));

// // Object.entries(obj)

// const map = new Map();
// map.set(5, true);
// map.set("5", false);
// console.warn(map);
// console.warn(map.size);

// for (const [key, value] of map) {
//   console.warn({ key, value });
// }

// console.warn(JSON.stringify(map));
// console.warn(JSON.stringify(obj));
// console.warn(map.toString());

// WeakMap, WeakSet.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
// Особливості та відмінності від Map, Set

// let obj = { mega_object: 1_000_000_000_000 };
// obj = null;

// Вступ до Promises.
// Promises
// resolve
// reject

const p = new Promise(() => {});
console.warn(p);

const todoPromise = fetch("https://jsonplaceholder.typicode.com/todos/1");
console.warn({ todoPromise });

const responsePromise = todoPromise.then((response) => {
  console.warn({ response });
  return response.json();
});

console.warn({ responsePromise });

responsePromise.then((json) => {
  console.warn({ json });
});

// show loader

const todoId = 1;
const pr = fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
  .then((response) => response.json())
  .then((json) => {
    console.warn(json);
  })
  .catch((err) => {
    console.warn("ERROR2", err);
  })
  .finally(() => {
    console.warn("END");
    // hide loader
  });

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// Стан promise.
// Стани Promise:

// pending
// fulfilled
// reject

// then.
// onResolve
// onReject

// https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

// Обробка помилок у Promise.
// catch

//

// Обробка кількох Promise.
// Promise.all
// Promise.allSettled

// https://dev.to/viclafouch/promise-allsettled-vs-promise-all-in-javascript-4mle

// https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
