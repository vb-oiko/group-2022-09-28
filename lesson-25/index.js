// Обробка помилок при використанні async ... await

// const getPostById = async (postId) => {
//   const response = await fetch(
//     `https://jsonplaceholder1.typicode.com/posts/${postId}`
//   )
// //   .catch((error) => {
// //     console.warn(error);
// //     if (error === "Network error") {
// //       return {
// //         json() {
// //           return "No internet";
// //         },
// //       };
// //     }
// //     return error;
// //   });

//   console.warn({ response });
//   const post = await response.json();

//   console.warn(post);
//   return post;
// };

// const button = document.getElementById("button");
// button.addEventListener("click", () => {
//   getPostById(1);
// });

// Огляд клієнт-серверної архітектури.
// https://www.toolsqa.com/client-server/client-server-architecture-and-model
// https://www.educative.io/courses/learn-rest-soap-api-test-automation-java/JEK9Mv7RLA9
// https://www.educative.io/courses/learn-rest-soap-api-test-automation-java/JYJx62BOyPo

// https://en.wikipedia.org/wiki/Client%E2%80%93server_model
/**
 * Client-server model is a distributed application structure
 * that partitions tasks or workloads
 * between the providers of a resource or service, called servers,
 * and service requesters, called clients. */

// HTTP
// https://developer.mozilla.org/en-US/docs/Web/HTTP

// request
// response
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages

// methods
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

// codes
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// WebSockets.
// огляд технології

// Приклади відкритих APIs.
// https://swapi.dev/documentation
// https://api.nasa.gov/
// https://pokeapi.co/

const resource = {
  count: 0,
  name: "test",
  data: {
    id: 102,
  },
};

const putPayload = {
  count: 1,
  name: "test",
  data: {
    id: 102,
  },
};

const wrongPatchPayload = {
  count: 1,
};

const correctPatchPayload = [{ op: "add", path: "/count", value: 1 }];

const a = fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
  method: "GET",
  headers: {
    ["Accept-Language"]: "fr",
  },
  //   body: {},
});

// https://www.totaltypescript.com/tutorials/beginners-typescript
