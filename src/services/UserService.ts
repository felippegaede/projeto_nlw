import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UsersRepository"

class UserService{

    async create(email: string){
        const usersRepository = getCustomRepository(UserRepository);

        const userExists = await usersRepository.findOne({email});

        if (userExists){
            return userExists;
        }

        const user = usersRepository.create({email});

        await usersRepository.save(user);

        return user;
    }

    async findByEmail(email: string){
        const usersRepository = getCustomRepository(UserRepository);

        const userExists = await usersRepository.findOne({email});

        return userExists;
    }

}

export {UserService}