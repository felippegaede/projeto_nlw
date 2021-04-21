import {Request, Response} from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {

    async create(req: Request, res: Response) : Promise<Response>{

        const { chat, username } = req.body;

        const settingService = new SettingsService();

        try{
            const service = await settingService.create({chat, username});
   
            return res.json(service);
        }catch(error){
            return res.status(400).json({message: error.message});
        }
    }
}

export {SettingsController}