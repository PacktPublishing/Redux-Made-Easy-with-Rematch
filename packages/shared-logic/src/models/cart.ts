import { createModel } from "@rematch/core";
import type { RootModel } from ".";
import type { ProductType } from "./types";

export const getProduct = (products: Array<ProductType>, id: string) =>
  products.find((product) => product.id === id);
export const getQuantity = (state: CartState, id: string) =>
  state.quantityById[id];

type CartState = {
  addedIds: Array<string>;
  quantityById: Record<string, number>;
};

const INITIAL_STATE: CartState = {
  addedIds: [],
  quantityById: {},
};
type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export const cart = createModel<RootModel>()({
  state: INITIAL_STATE,
  reducers: {
    RESTORE_CART() {
      return INITIAL_STATE;
    },
    ADD_TO_CART(state, product: AtLeast<ProductType, "id">) {
      const indexProduct = state.addedIds.indexOf(product.id);
      if (indexProduct === -1) {
        state.addedIds.push(product.id);
        state.quantityById[product.id] = 1;
        return state;
      }

      state.quantityById[product.id] =
        (state.quantityById[product.id] || 0) + 1;
      return state;
    },
    REMOVE_FROM_CART(state, product: AtLeast<ProductType, "id">) {
      const indexProduct = state.addedIds.indexOf(product.id);
      if (indexProduct === -1) return state;

      if (state.quantityById[product.id] === 1) {
        state.addedIds.splice(indexProduct, 1);
        delete state.quantityById[product.id];
      } else {
        state.quantityById[product.id] -= 1;
      }
      return state;
    },
  },
  selectors: (slice, createSelector) => ({
    total() {
      return createSelector(
        [slice, (rootState) => rootState.shop.products],
        (cartState, products) =>
          cartState.addedIds.reduce(
            (total, id) =>
              total +
              (getProduct(products, id)?.price || 0) *
                getQuantity(cartState, id),
            0
          )
      );
    },
    getCartProducts() {
      return createSelector(
        [slice, (rootState) => rootState.shop.products],
        (cartState, products) =>
          cartState.addedIds.map((id) => getProduct(products, id))
      );
    },
  }),
});
