export const getProduct = (products, id) =>
  products.find((product) => product.id === id);
export const getQuantity = (state, id) => state.quantityById[id];

const INITIAL_STATE = {
  addedIds: [],
  quantityById: {},
};
export const cart = {
  state: INITIAL_STATE,
  reducers: {
    RESTORE_CART() {
      return INITIAL_STATE;
    },
    ADD_TO_CART(state, product) {
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
    REMOVE_FROM_CART(state, product) {
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
        slice,
        (rootState) => rootState.shop.products,
        (cartState, products) =>
          cartState.addedIds.reduce(
            (total, id) =>
              total +
              getProduct(products, id).price * getQuantity(cartState, id),
            0
          )
      );
    },
    getCartProducts() {
      return createSelector(
        slice,
        (rootState) => rootState.shop.products,
        (cartState, products) =>
          cartState.addedIds.map((id) => getProduct(products, id))
      );
    },
  }),
};
