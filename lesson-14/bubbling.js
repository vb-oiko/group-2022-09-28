const PHASES = ["NONE", "CAPTURING", "AT_TARGET", "BUBBLING"];

const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
const div5 = document.querySelector("#div5");

const getElementName = (elem) => {
  if (elem === window) {
    return "window";
  }

  if (elem === document) {
    return "document";
  }

  return elem.id;
};

function logHandler(ev) {
  console.warn(
    `target: ${getElementName(ev.target)}`,
    `currentTarget: ${getElementName(ev.currentTarget)},`,
    `phase: ${PHASES[ev.eventPhase]}, `
  );
}

// const menuItems = [
//   { label: "Open file", action: () => {}, id: 1 },
//   { label: "Save file", action: () => {}, id: 2 },
//   { label: "Close file", action: () => {}, id: 3 },
//   { label: "Open file", action: () => {}, id: 4 },
//   { label: "Open file", action: () => {}, id: 5 },
//   { label: "Open file", action: () => {}, id: 6 },
// ];

const stopPropagationHandler = (ev) => {
  console.warn("propagation stopped");
  ev.stopPropagation();
};

const stopImmediatePropagationHandler = (ev) => {
  console.warn("immediate propagation stopped");
  ev.stopImmediatePropagation();
};

// div1.addEventListener("click", logHandler, true);
// div2.addEventListener("click", logHandler, true);

// div3.addEventListener("click", logHandler, true);

// div4.addEventListener("click", logHandler, true);
// div5.addEventListener("click", logHandler, true);
// document.addEventListener("click", logHandler, true);
// window.addEventListener("click", logHandler, true);

div1.addEventListener("click", logHandler);
div2.addEventListener("click", logHandler);

div3.addEventListener("click", stopImmediatePropagationHandler);
// div3.addEventListener("click", stopPropagationHandler);
div3.addEventListener("click", logHandler);

div4.addEventListener("click", logHandler);

div5.addEventListener("click", logHandler);
document.addEventListener("click", logHandler);
window.addEventListener("click", logHandler);

div4.addEventListener("click", logHandler);

div5.addEventListener("click", logHandler);
