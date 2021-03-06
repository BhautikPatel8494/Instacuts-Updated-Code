import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { JwtStrategy } from './strategy/local.strategy';
import { UserSchema } from '../schema/user.schema';
import { ServiceProviderSchema } from '../schema/serviceProvider.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'ServiceProvider', schema: ServiceProviderSchema }
    ]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '24h' },
        };
      },
    }),
  ],
  providers: [JwtStrategy],
})
export class AuthenticationModule { }
