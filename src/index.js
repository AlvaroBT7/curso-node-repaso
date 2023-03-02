// modulo events
// commonJS import
// const EventEmitter = require("evnets");

/*
import colors from "colors";
import { EventEmitter } from "events";

const emisor = new EventEmitter()
  .on("response", () => console.log("response"))
  .on("end", (data) => {
    console.log(data);
  });

  emisor.emit("response");
  emisor.emit("en", "todos los datos enviados");

*/

// import { writeFile } from "fs/promises";

// const createBigFile = async (path) => {
//   try {
//     await writeFile(path, "Hello world".repeat(100000));
//     console.log("Archivo creado !");
//   } catch(err) {
//     console.error(err);
//   }
// }
// createBigFile("./src/data/file.txt");

/*
import { createReadStream } from "fs";

const stream = createReadStream("./src/data/file.txt", "utf-8");
stream.on("data", (chunk) => {
  console.log(chunk);
});
stream.on("end", () => {
  console.log("El archivo ha finalizado");
});
stream.on("error", (err) => console.error(err));

*/

// import http from "http";
// import { dirname, join } from "path";
// import { createReadStream } from "fs";
// import { EventEmitter } from "node:events";

// http
//   .createServer((req, res) => {
//     const fileStream = createReadStream(
//       join(process.cwd(), "src", "data", "file.txt"),
//       "utf-8"
//     );
//     fileStream
//       .on("data", (chunk) => res.end(chunk))
//       .on("end", () => console.log("Data has been sended"))
//       .on("error", (err) => console.error(err));
//   })
//   .listen(3000, () => console.log("Server is listening at 3000"));