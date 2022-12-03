// Теми наступного заняття

// Стан promise.
// Стани Promise:

// console.warn(new Promise(() => {}));

// console.warn(Promise.resolve(5));
// console.warn(Promise.reject("error"));

// pending
// fulfilled
// reject

// then.
// onResolve
// onReject

// catch(onError) === then(_, onError)
// const divEl = document.getElementById("div");
// const pr = fetch(`https://jsonplaceholder.typicode.com/posts/1`)
//   .then(
//     (response) => {
//       console.warn("then 1:", response);
//       //   throw "Custom error";
//       return response.json();
//       //   return 5;
//     },
//     (err) => {
//       divEl.innerText = err;
//       console.warn("Error1:", err);
//     }
//   )
//   .catch((err) => {
//     console.warn("Error2: ", err);
//   })
//   .then(
//     (json) => {
//       console.warn();
//       console.warn("then 2: ", json);
//     },
//     (err) => {
//       console.warn("Error 2.5:", err);
//     }
//   )
//   .catch((err) => {
//     console.warn("Error3:", err);
//   })
//   .then((obj) => {
//     divEl.innerText = JSON.parse(obj, null, 2);
//   })
//   .catch((err) => {
//     console.warn("Error4:", err);
//   });

// let accessToken;
// let refreshToken;
// let postUrl = `https://jsonplaceholder.typicode.com/posts/1`;

// const pr = fetch(postUrl, accessToken)
//   .then((response) => {
//     console.warn("then 1:", response);
//     //   throw "Custom error";
//     return response.json();
//     //   return 5;
//   })
//   .catch((err) => {
//     // if err === accessToken expired {
//     fetch("getAccessToken(refreshToken)")
//       .then((token) => {
//         accessToken = token;
//         // fetch(postUrl, accessToken)
//       })
//       .catch((err) => {
//         // if err === refreshToken expired {
//         // open popup and get login, password from user
//         fetch("getRefreshToken({login, password})")
//           .then((token) => {
//             refreshToken = token;
//             fetch("getAccessToken(refreshToken)").then((token) => {
//               accessToken = token;
//               // fetch(postUrl, accessToken)
//             });
//           })
//           .catch((err) => {
//             // if err === login or password incorrect
//             // show message to user
//             // else
//             return Promise.reject(err);
//           });

//         //}
//       });
//     //}
//   })
//   .catch((err) => {
//     // show toast with error
//   });

// https://www.npmjs.com/package/axios
// PWA
// axios interceptor example

// https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

// Promise constructor

function getPostById(postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        if (response.status === 404) {
          reject(new Error("Post not found"));
        }
        return response.json();
      })
      .then((json) => {
        return resolve(json);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// try {
//   const postPromise = getPostById(101)
//     .then((post) => console.warn(post))
//     .catch((err) => {
//       console.warn("Error:", err);
//     });
//   console.warn("postPromise", postPromise);
// } catch (err) {
//   console.warn("Error catch:", err);
// }

// Обробка помилок у Promise.
// catch

// Обробка кількох Promise.
// Promise.all
// Promise.allSettled

// Promise.all([getPostById(1), getPostById(2), getPostById(101)])
//   .then((posts) => {
//     console.warn(posts);
//   })
//   .catch((err) => {
//     console.warn("Error", err);
//   });

Promise.allSettled([getPostById(1), getPostById(2), getPostById(101)])
  .then((posts) => {
    console.warn(posts);
  })
  .catch((err) => {
    console.warn("Error", err);
  });

// https://dev.to/viclafouch/promise-allsettled-vs-promise-all-in-javascript-4mle
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Sequencing_animations
