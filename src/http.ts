import express, { response } from "express";
import "./database";
import { routes } from "./routes";
import {createServer} from "http";
import {Server, Socket} from "socket.io"
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html")

app.get("/pages/client", (req, res) => {
    return res.render("html/client.html") 
})

const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
})

app.use(express.json());
app.use(routes);

// app.get("/", (request, response) => {
//     return response.json({success: true, status: 1, message: "Hello World!!"});
// });

// app.post("/", (request, response) => {
//     return response.json({success: true, status: 1, message: "User created with success"});
// })

export {http, io}