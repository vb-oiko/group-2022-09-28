// https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/sequencing-animations/start

const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

const animation1 = alice1.animate(aliceTumbling, aliceTiming);
animation1.finished.then(() => {
  const animation2 = alice2.animate(aliceTumbling, aliceTiming);
  animation2.finished.then(() => {
    const animation3 = alice3.animate(aliceTumbling, aliceTiming);
    animation3.finished.then(() => {
      console.warn("Done!");
    });
  });
});

function animate(alice) {
  const { finished } = alice.animate(aliceTumbling, aliceTiming);
  return finished;
}

animate(alice1)
  .then(() => animate(alice2))
  .then(() => animate(alice3));

async function animateAll() {
  await animate(alice1);
  await animate(alice2);
  await animate(alice3);
}

animateAll();

setTimeout(function timeout() {
  console.log("Timed out!");
}, 0);
Promise.resolve(1).then(function resolve() {
  console.log("Resolved!");
});

// https://medium.com/@idineshgarg/let-us-consider-an-example-a58bb1c11f55
