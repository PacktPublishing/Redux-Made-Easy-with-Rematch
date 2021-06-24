import { store as lazyStore } from "../index";

const store = lazyStore();
const { dispatch } = store;
const getCart = () => store.getState().cart;

describe("Cart model", () => {
  beforeEach(() => dispatch({ type: "RESET" }));

  it("should return the initial state correctly", () => {
    expect(getCart()).toEqual({ addedIds: [], quantityById: {} });
  });

  it("should ADD_TO_CART", () => {
    dispatch.cart.ADD_TO_CART({ id: "ID" });
    expect(getCart()).toEqual({
      addedIds: ["ID"],
      quantityById: {
        ID: 1,
      },
    });
  });

  it("should increase an already added item to the cart", () => {
    dispatch.cart.ADD_TO_CART({ id: "ID" });
    dispatch.cart.ADD_TO_CART({ id: "ID" });
    expect(getCart()).toEqual({
      addedIds: ["ID"],
      quantityById: {
        ID: 2,
      },
    });
  });

  it("should decrease an already added item to the cart", () => {
    dispatch.cart.ADD_TO_CART({ id: "ID" });
    dispatch.cart.ADD_TO_CART({ id: "ID" });
    expect(getCart()).toEqual({
      addedIds: ["ID"],
      quantityById: {
        ID: 2,
      },
    });
    dispatch.cart.REMOVE_FROM_CART({ id: "ID" });
    expect(getCart()).toEqual({
      addedIds: ["ID"],
      quantityById: {
        ID: 1,
      },
    });
  });

  it("should remove completely a product from the cart", () => {
    dispatch.cart.ADD_TO_CART({ id: "ID" });
    dispatch.cart.ADD_TO_CART({ id: "ID" });
    expect(getCart()).toEqual({
      addedIds: ["ID"],
      quantityById: {
        ID: 2,
      },
    });
    dispatch.cart.REMOVE_FROM_CART({ id: "ID" });
    expect(getCart()).toEqual({
      addedIds: ["ID"],
      quantityById: {
        ID: 1,
      },
    });
    dispatch.cart.REMOVE_FROM_CART({ id: "ID" });
    expect(getCart()).toEqual({
      addedIds: [],
      quantityById: {},
    });
  });

  it("should reset the cart state to his INITIAL_STATE", () => {
    dispatch.cart.ADD_TO_CART({ id: "ID" });
    expect(getCart()).toEqual({
      addedIds: ["ID"],
      quantityById: {
        ID: 1,
      },
    });
    dispatch.cart.RESTORE_CART();
    expect(getCart()).toEqual({
      addedIds: [],
      quantityById: {},
    });
  });

  describe("testing selectors", () => {
    it("total() selector should return total", () => {
      expect(
        store.select.cart.total({
          shop: {
            products: [
              {
                id: "ID",
                price: 9.99,
              },
            ],
          },
          cart: {
            addedIds: ["ID"],
            quantityById: {
              ID: 3,
            },
          },
        } as any)
      ).toEqual(9.99 * 3);
    });
    it("total() selector should return total", () => {
      expect(
        store.select.cart.getCartProducts({
          shop: {
            products: [
              {
                id: "ID",
                price: 9.99,
              },
            ],
          },
          cart: {
            addedIds: ["ID"],
            quantityById: {
              ID: 3,
            },
          },
        } as any)
      ).toEqual([{ id: "ID", price: 9.99 }]);
    });
  });
});
