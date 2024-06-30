import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { GoogleStrategy } from './utils/GoogleStrategy';
import { AuthService } from './auth.service';
import { User } from 'src/typeorm/entities/User';
import { SessionSerializer } from './utils/Serializer';

@Module({
  controllers: [AuthController],
  providers: [
    GoogleStrategy,
    SessionSerializer,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
  ],
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([User])],
})
export class AuthModule {}
