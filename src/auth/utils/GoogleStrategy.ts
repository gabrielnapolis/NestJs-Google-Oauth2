import { Injectable } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
            clientID: process.env.CLIENTID,
            clientSecret: process.env.CLIENTSECRET,
            callbackURL: process.env.CALLBACKURL,
            scope: ['profile', 'email'],
        });
    }

    async validate(accessToken: string, refreshToken:string, profile:Profile){
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
    }
}