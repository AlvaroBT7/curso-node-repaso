// streaming big .txt files

import { createReadStream } from "fs";

const fileStream =
  createReadStream(/*Ruta del archivo a leer, codificacion u objeto con propiedades entres otras encoding (codificacion)*/);

// captura de eventos asociado al stream
fileStream
  .on("data", (chunk) => console.log(chunk))
  .on("end", () => console.log("All the data has been seded successfully"))
  .on("error", (err) => console.error(err));
