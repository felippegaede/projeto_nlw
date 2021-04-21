import express, { response } from "express";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

// app.get("/", (request, response) => {
//     return response.json({success: true, status: 1, message: "Hello World!!"});
// });

// app.post("/", (request, response) => {
//     return response.json({success: true, status: 1, message: "User created with success"});
// })

app.listen(3333, () => console.log("Server run on port 3333"));