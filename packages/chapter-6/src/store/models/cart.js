export const getProduct = (state, id) =>
  state.shop.products.find((product) => product.id === id);
export const getQuantity = (state, id) => state.cart.quantityById[id];

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
        return {
          addedIds: [...state.addedIds, product.id],
          quantityById: {
            ...state.quantityById,
            [product.id]: 1,
          },
        };
      }

      return {
        addedIds: state.addedIds,
        quantityById: {
          ...state.quantityById,
          [product.id]: (state.quantityById[product.id] || 0) + 1,
        },
      };
    },
    REMOVE_FROM_CART(state, product) {
      const indexProduct = state.addedIds.indexOf(product.id);
      if (indexProduct === -1) return state;

      const clonedIds = [...state.addedIds];
      const clonedQuantityById = state.quantityById;
      if (clonedQuantityById[product.id] === 1) {
        clonedIds.splice(indexProduct, 1);
        delete clonedQuantityById[product.id];
      } else {
        clonedQuantityById[product.id] -= 1;
      }
      return {
        addedIds: clonedIds,
        quantityById: clonedQuantityById,
      };
    },
  },
};
