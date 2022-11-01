const elem = document.getElementById("elem");

console.warn(elem.children);

function logNode(node) {
  console.warn(node.innerText);
  const children = Array.from(node.children);

  if (children.length === 0) {
    return;
  }

  children.forEach((child) => {
    logNode(child);
  });
}

function logNode1(node) {
  console.warn(node.innerText);
  const children = node.children;

  if (children.length === 0) {
    return;
  }

  for (const child of children) {
    logNode(child);
  }
}

logNode1(elem);
