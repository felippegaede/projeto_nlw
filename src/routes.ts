import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UserController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UserController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.put("/settings/:username", settingsController.update);
routes.get("/settings/:username", settingsController.findByUsername);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:user_id", messagesController.showByUser);

export { routes };