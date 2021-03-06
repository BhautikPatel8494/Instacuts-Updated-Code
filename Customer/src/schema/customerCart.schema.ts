import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class CartItems {
  @Prop({ type: Types.ObjectId, required: true })
  service_id: string;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Number, default: 0 })
  regular_price: number;

  @Prop({ type: Number, default: 0 })
  sale_price: number;

  @Prop({ type: Boolean, default: false })
  is_custom: boolean;

  @Prop({ type: Number, required: true })
  quantity: number;
}

const CartItemSchema = SchemaFactory.createForClass(CartItems);

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class CartProfiles {
  @Prop({ type: String, required: true })
  firstname: string;

  @Prop({ type: String, required: true })
  lastname: string;

  @Prop({ type: String })
  profile: string;

  @Prop({ type: Types.ObjectId, required: true })
  profile_id: string;

  @Prop({ type: String, required: true })
  user_type: string;

  @Prop({ type: [CartItemSchema], default: [] })
  cart_items: [CartItems];
}

const CartProfileSchema = SchemaFactory.createForClass(CartProfiles);

@Schema()
export class BillDetails {
  @Prop({ type: Number, default: 0 })
  total_service: number;

  @Prop({ type: Number, default: 0 })
  service_charges: number;

  @Prop({ type: Number, default: 0 })
  convenience_fee: number;

  @Prop({ type: Number, default: 0 })
  discount: number;

  @Prop({ type: String })
  voucher: string;

  @Prop({ type: Number, default: 0 })
  voucher_amount: number;

  @Prop({ type: Number, default: 0 })
  tax: number;

  @Prop({ type: Number, default: 0 })
  total_bill: number;
}

const BillDetailSchema = SchemaFactory.createForClass(BillDetails);

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, collection: 'customer_carts' })
export class CustomerCarts {
  @Prop({ type: Types.ObjectId, ref: 'users', required: true })
  user_id: string;

  @Prop({ type: Types.ObjectId })
  stylist_id: string;

  @Prop({ type: Types.ObjectId })
  location_id: string;

  @Prop({ type: Types.ObjectId })
  service_category_id: string;

  @Prop({ type: String })
  stylist_type: string;

  @Prop({ type: String, enum: ["simple-service", "custom-service"], default: "simple-service" })
  service_type: string;

  @Prop({ tyep: CartProfileSchema, default: [] })
  cart_profiles: [CartProfiles];

  @Prop({ type: BillDetailSchema, default: {} })
  bill_details: BillDetails;

  created_at: string;
  updated_at: string;
}

export const CustomerCartSchema = SchemaFactory.createForClass(CustomerCarts);
