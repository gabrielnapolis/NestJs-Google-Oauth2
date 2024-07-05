import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { GoogleAuthGuard } from './utils/Guards';
import { FacebookStrategy } from './utils/FacebookStrategy';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLoginGoogle() {
    return { msg: 'Google Authentication' };
  }

  // auth/google/redirect
  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirectGoogle() {
    return { msg: 'OK' };
  }

  @Get('status')
  user(@Req() request: Request) {
    console.log(request.user);
    if (request.user) {
      return { msg: 'Authenticated'};
    } else {
      return { msg: 'Not Authenticated'};
    }
  }

  @Get('facebook/login')
  @UseGuards(FacebookStrategy)
  handleLoginFB() {
    return { msg: 'Facebook Authentication' };
  }

  // auth/google/redirect
  @Get('facebook/redirect')
  @UseGuards(FacebookStrategy)
  handleRedirectFB() {
    return { msg: 'OK' };
  }

}
