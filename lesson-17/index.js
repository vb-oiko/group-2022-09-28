// Cookies
// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
// що таке Cookies?
// Session management, Personalization, Tracking
// HttpOnly, Secure, SameSite
// persistent cookies and session cookies

// переваги та недоліки Cookies
// Access on the Server, Data Size(4kB va 5MB), Data Expiry, Better API
// cookies are sent everywhere every time

// Робота з Cookies в JS
// https://www.w3schools.com/js/js_cookies.asp
// console.warn(getCookie("name"));

// function getCookie(key) {
//   const pairs = document.cookie
//     .split(";")
//     .map((pair) => pair.trim())
//     .map((pair) => pair.split("="))
//     .filter((pair) => pair[0] === key);

//   if (pairs.length > 0) {
//     return pairs[0][1];
//   }
// }

// function setCookie(key, value) {
//   document.cookie = `${key}=${value}`;
// }

// setCookie("theme", "white");

// LocalStorage
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// що таке LocalStorage?
// localStorage in incognito tab
// робота з LocalStorage
// both key and value are strings

// localStorage.setItem(true, "value");
// console.warn(localStorage.getItem(true));
// console.warn(localStorage.length);
// console.warn(localStorage.key(0));

// localStorage.removeItem("key");
// console.warn(localStorage.getItem("key"));

// localStorage.clear();
// console.warn(localStorage.getItem("key"));

// const order1 = {
//   productId: 12,
//   qty: 1,
//   price: 20,
// };
// const order2 = {
//   productId: 12,
//   qty: 1,
//   price: 20,
//   print() {},
// };

// const ordersToStore = [order1, order2];

// localStorage.setItem("orders", JSON.stringify(ordersToStore));

// const orders = JSON.parse(localStorage.getItem("orders"));

// console.warn(orders);

// SessionStorage
// що таке SessionStorage?
// new tab/page,
// preserved reload/restore/duplicate
// робота з SessionStorage
//

const LOCAL_STORAGE_KEY = "items";

const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.querySelector("#container");

const itemsString = localStorage.getItem(LOCAL_STORAGE_KEY);
const items = JSON.parse(itemsString) || [];

function addItem(item) {
  const el = document.createElement("div");
  el.innerText = item;
  container.appendChild(el);
}

for (item of items) {
  addItem(item);
}

// handleClick()

const buildHandleClick = (prefix) => {
  return () => {
    const item = input.value;
    addItem(`${prefix}:${item}`);
    items.push(item);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  };
};

button.addEventListener("click", buildHandleClick("test"));
button.addEventListener("click", () => {});

// localStorage.setItem("key", "some value");
// https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria
