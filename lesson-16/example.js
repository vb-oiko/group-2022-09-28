const form = document.forms[0];
form.addEventListener("submit", (ev) => {
  // return;
  ev.preventDefault();

  fetch("http://127.0.0.1:8080/", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      product: form.elements["product"].value,
    }),
  });
});
