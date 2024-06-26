import { ProductType } from './Product';

export type CartItem = ProductType & { amount: number };
