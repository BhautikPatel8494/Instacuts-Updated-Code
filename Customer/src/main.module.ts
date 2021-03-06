import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';

import { JwtAuthGuard } from './authentication/guard/jwt.auth.gaurd';
import { HomeModule } from './home/home.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AddressModule } from './address/address.module';
import { FavouriteModule } from './favourite/favourite.module';
import { RatingModule } from './rating/rating.module';
import { ContactModule } from './contact/contact.module';
import { BlockModule } from './block/block.module';
import { SosModule } from './sos/sos.module';
config()

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URL,
      }),
    }),
    AuthenticationModule,
    HomeModule,
    AddressModule,
    FavouriteModule,
    RatingModule,
    ContactModule,
    BlockModule,
    SosModule
  ],
  providers: [{
    provide: APP_GUARD,
    useClass: JwtAuthGuard
  }],
})
export class MainModule { }
