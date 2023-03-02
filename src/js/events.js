// node:events module
import colors from "colors";
import { EventEmitter } from "events";

// forma clasica creando el objeto con la clase original
const emiter = new EventEmitter()
  .on("xEvent", () => console.log("xEvent has ocurred".yellow))
  .on("yEvent", (data) => console.log(data.blue));

emiter.emit("xEvent")
emiter.emit("yEvent", "Important information !");

// otra forma de trabajar con emisores de eventos es crear una clase sin nada y hacer que herede de EventEmitter. De esa forma el nombre de la clase queda mas claro y al mismo tiempo mantienes el nombre que la clase padra "EventEmitter" segun esta en la documentacion.
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter().on("recive", (data) => console.log(data.blue));

myEmitter.emit("recive", "datos");
