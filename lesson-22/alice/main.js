// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Sequencing_animations
//
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

// const { finished } = alice1.animate(aliceTumbling, aliceTiming);
// finished.then(() => {
//   const { finished } = alice2.animate(aliceTumbling, aliceTiming);
//   finished.then(() => {
//     const { finished } = alice3.animate(aliceTumbling, aliceTiming);
//     finished.then(() => console.warn("Finished!"));
//   });
// });

function animateAlice(alice) {
  const { finished } = alice.animate(aliceTumbling, aliceTiming);
  return finished;
}

// animateAlice(alice1)
//   .then(() => animateAlice(alice2))
//   .then(() => animateAlice(alice3))
//   .then(() => console.warn("Finished"));

async function animateAllAlice() {
  await animateAlice(alice1);
  await animateAlice(alice2);
  await animateAlice(alice3);
}

animateAllAlice().then(() => console.warn("Finished"));
