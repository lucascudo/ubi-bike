import { Store } from "./store.interface";

export interface Product {
  name: string;
  quantity: number;
  stores: Store[];
}
