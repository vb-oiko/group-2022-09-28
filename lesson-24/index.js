// EventLoop.
// https://www.youtube.com/watch?v=8aGhZQkoFbQ

// https://developer.mozilla.org/ru/docs/Web/JavaScript/EventLoop

// *** stack

// function foo(b) {
//     const a = 10;
//     return a + b + 11;
//   }

//   function bar(x) {
//     const y = 3;
//     return foo(x * y);
//   }

//   const baz = bar(7); // assigns 42 to baz

// *** next tick of the event loop

// console.log("this is the start");

// setTimeout(() => {
//   console.log("Callback 1: this is a msg from call back");
// }, 100); // has a default time value of 0

// console.log("this is just a message");

// setTimeout(() => {
//   console.log("Callback 2: this is a msg from call back");
// }, 0);

// console.log("this is the end");

// *** micro tasks vs macro tasks

// function func() {
//   console.log("continue");
// }

// console.log("start"); // macro task tick #0

// setTimeout(() => {
//   // macro task tick #0
//   console.warn("timeout!"); // macro task tick #1
// }, 0);

// func(); // macro task tick #0

// new Promise((resolve) => {
//   // macro task tick #0
//   resolve(console.warn("promise1!")); // micro task tick #0
// });

// new Promise((resolve) => {
//   // macro task tick #0
//   resolve(console.warn("promise2!")); // micro task tick #0
// });

// *** async functions

// async function func() {
//   return 5;
// }

// const func1 = async () => {
//   throw "Error!";
// };

// const func2 = async () => {
//   return Promise.resolve(10);
// };

// console.warn(func().then((item) => console.log(item)));

// console.warn(func1());
// console.warn(func2().then((item) => console.log(item)));

// new Promise((resolve, reject) => {
//   // logic

//   resolve(5);
// });

// *** await

const getPostById = async (postId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder1.typicode.com/posts/${postId}`
    );
  } catch (error) {
    console.warn(error);
  }

  const post = await response.json();

  console.warn(post);
  return post;
};

getPostById(1);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

// https://create-react-app.dev/
// https://webpack.js.org/

// tick - event loop iteration

// console.log("end");
