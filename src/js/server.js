import http from "http";

// http module server that sends html code

http
  .createServer((req, res) => {
    res.end(`
      <h1>Bienvenido al server sin express</h1>
      <button id="btn" style="background-color: #f00; color: #fff; padding: 6px; border: none; border-radius: 2px; box-shadow: 0 0 35px 3px #f008">Dale click al boton</button>
      <style>
        body {
          background-color: #222731;
          display: flex;
          flex-flow: wrap row;
          justify-content: center;
          align-items: start;
        }
        body * {
          flex-basis: 200px;
        }
        h1 {
          font-family: sans-serif;
          color: #fff;
        }
      </style>
      <script defer>
        const btn = document.querySelector("#btn");
        btn.addEventListener("click", () => alert(btn.innerText));
      </script>
    `)
  })
  .listen(process.env.PORT || 3000, () => {
    console.log("Server is listening at", process.env.PORT || 3000);
  });