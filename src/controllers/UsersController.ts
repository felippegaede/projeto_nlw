import { UserService } from "../services/UserService"
import {Request, Response} from "express";


class UserController{

    async create(req: Request, resp: Response): Promise<Response>{
        const {email} = req.body;

        const userService = new UserService();

        const user = await userService.create(email);

        return resp.json(user);
    }
}

export { UserController }