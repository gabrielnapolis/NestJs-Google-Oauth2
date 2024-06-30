import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { GoogleStrategy } from './utils/GoogleStrategy';

@Module({
    controllers: [AuthController],
    providers: [GoogleStrategy],
    imports: [ConfigModule.forRoot()],
})
export class AuthModule {}
