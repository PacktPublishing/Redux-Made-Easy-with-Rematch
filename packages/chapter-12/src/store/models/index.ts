import type { Models } from "@rematch/core";
import { shop } from "./shop";
import { cart } from "./cart";

export interface RootModel extends Models<RootModel> {
  shop: typeof shop;
  cart: typeof cart;
}

export { shop, cart };
