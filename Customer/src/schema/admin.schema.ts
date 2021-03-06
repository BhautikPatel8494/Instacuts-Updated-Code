import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, collection: 'admins' })
export class Admins {
    @Prop({ type: String, required: true })
    name: string;

    @Prop({ type: String, unique: true, required: true })
    email: string;

    @Prop({ type: String, required: true })
    password: string;

    @Prop({ type: String, default: null })
    profile: string;

    @Prop({ type: String, default: null })
    mobile_no: string;

    @Prop({ type: String, default: null })
    authy_id: string;

    @Prop({ type: Boolean, default: true })
    status: boolean;

    created_at: string;
    updated_at: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admins);
