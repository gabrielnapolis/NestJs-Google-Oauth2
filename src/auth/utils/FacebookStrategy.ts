import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-facebook';
import { AuthService } from '../auth.service';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
      clientID: process.env.FB_CLIENTID,
      clientSecret: process.env.FB_CLIENTSECRET,
      callbackURL: process.env.FB_CALLBACKURL,
      scope: ['email'],
      profileFields: ['emails', 'name'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    // console.log(accessToken);
    // console.log(refreshToken);
    // console.log(profile);
    
    const user = await this.authService.validateUser({
      email: profile.emails[0].value,
      displayName: profile.displayName,
    });
    console.log('Validate');
    console.log(user);
    return user || null;
  }
}
