import { ProductResponse } from "./Product";

export interface OrderItemType {
  product: ProductResponse;
  quantity: number;
  observation?: string;
}
