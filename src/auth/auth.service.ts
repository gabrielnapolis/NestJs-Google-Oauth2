import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { UserDetails } from "src/utils/types";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly userRepository:
        Repository<User>,
    )  {}

    validateUser(details: UserDetails){
        console.log('AuthService');
        console.log(details);
    }
}