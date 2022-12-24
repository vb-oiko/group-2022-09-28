// const tree = {
//   tagName: "div",
//   attributes: {
//     id: "div",
//     class: "div1",
//   },
//   children: [
//     {
//       tagName: "h1",
//       attributes: {
//         id: "h1",
//       },
//       children: ["title"],
//     },
//     {
//       tagName: "p",
//       attributes: {
//         id: "p",
//       },
//       children: ["some text"],
//     },
//   ],
// };

const createElement = (tagName, attributes, ...children) => {
  return {
    tagName,
    attributes,
    children,
  };
};

const React = {
  createElement,
};

const virtualDOM = /*#__PURE__*/ React.createElement(
  "div",
  {
    id: "main",
  },
  /*#__PURE__*/ React.createElement(
    "div",
    {
      id: "div",
      class: "div1",
    },
    /*#__PURE__*/ React.createElement(
      "h1",
      {
        id: "h1",
      },
      "title"
    ),
    /*#__PURE__*/ React.createElement(
      "p",
      {
        id: "p",
      },
      "some text"
    ),
    /*#__PURE__*/ React.createElement(
      "p",
      {
        id: "p",
      },
      "Other text"
    )
  )
);

console.warn(virtualDOM);

const renderElem = ({ tagName, attributes, children }) => {
  const elem = document.createElement(tagName);

  for (const [name, value] of Object.entries(attributes)) {
    elem.setAttribute(name, value);
  }

  for (const child of children) {
    if (typeof child === "string") {
      elem.appendChild(document.createTextNode(child));
    }

    if (typeof child === "object") {
      elem.appendChild(renderElem(child));
    }
  }

  return elem;
};

const root = document.getElementById("root");
root.appendChild(renderElem(virtualDOM));
