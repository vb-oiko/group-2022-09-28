const WS_URL = "wss://ws.postman-echo.com/raw";

const websocket = new WebSocket(WS_URL);

websocket.addEventListener("open", (evt) => {
  console.log("CONNECTED");

  const message = "Hello world";
  console.log("SENT: " + message);
  websocket.send(message);
});

websocket.addEventListener("close", (evt) => {
  console.log("DISCONNECTED");
});

websocket.addEventListener("message", (evt) => {
  console.log("RESPONSE: " + evt.data + "");
  websocket.close();
});

websocket.addEventListener("error", (evt) => {
  console.log("ERROR:" + evt.data);
});
