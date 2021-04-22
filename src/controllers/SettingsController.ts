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

    async findByUsername(req: Request, res: Response) : Promise<Response>{
        const {username} = req.params;

        const settingsService = new SettingsService();

        const settings = await settingsService.fidByUsername(username);

        return res.json(settings);
    }

    async update(req: Request, res: Response) : Promise<Response>{
        const {username} = req.params;
        const {chat} = req.body;

        const settingsService = new SettingsService();

        const settings = await settingsService.update(username, chat);

        return res.json(settings);
    }

}

export {SettingsController}