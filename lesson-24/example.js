new Promise((resolve) => {
  resolve(console.warn("promise!"));
});

setTimeout(() => {
  console.warn("timeout!");
}, 0);
