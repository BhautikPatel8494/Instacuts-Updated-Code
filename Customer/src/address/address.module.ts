import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { AddressController } from "./address.controller";
import { AddressService } from "./address.service";
import { UserSchema } from "../schema/user.schema";
import { ApiResponse } from "../utils/apiResponse.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [AddressController],
    providers: [AddressService, ApiResponse]
})

export class AddressModule { }
