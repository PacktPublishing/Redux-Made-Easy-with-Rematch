import { store } from "../index";

const getCart = () => store.getState().cart;

describe("Cart", () => {
  afterEach(() => store.dispatch({ type: "RESET" }));
  it("should return the initial state correctly", () => {
    expect(getCart()).toEqual({
      addedIds: [],
      quantityById: {},
    });
  });

  it("should ADD_TO_CART", () => {
    expect(getCart()).toEqual({
      addedIds: [],
      quantityById: {},
    });
    store.dispatch.cart.ADD_TO_CART({ id: "ID" });
    expect(getCart()).toEqual({
      addedIds: ["ID"],
      quantityById: {
        ID: 1,
      },
    });
  });

  it("should increase an already added item to the cart", () => {
    store.dispatch.cart.ADD_TO_CART({ id: "ID" });
    store.dispatch.cart.ADD_TO_CART({ id: "ID" });
    expect(getCart()).toEqual({
      addedIds: ["ID"],
      quantityById: {
        ID: 2,
      },
    });
  });

  it("should decrease an already added item to the cart", () => {
    store.dispatch.cart.ADD_TO_CART({ id: "ID" });
    store.dispatch.cart.ADD_TO_CART({ id: "ID" });
    expect(getCart()).toEqual({
      addedIds: ["ID"],
      quantityById: {
        ID: 2,
      },
    });
    store.dispatch.cart.REMOVE_FROM_CART({ id: "ID" });
    expect(getCart()).toEqual({
      addedIds: ["ID"],
      quantityById: {
        ID: 1,
      },
    });
  });

  it("should remove completely a product from the cart", () => {
    store.dispatch.cart.ADD_TO_CART({ id: "ID" });
    store.dispatch.cart.ADD_TO_CART({ id: "ID" });
    expect(getCart()).toEqual({
      addedIds: ["ID"],
      quantityById: {
        ID: 2,
      },
    });
    store.dispatch.cart.REMOVE_FROM_CART({ id: "ID" });
    expect(getCart()).toEqual({
      addedIds: ["ID"],
      quantityById: {
        ID: 1,
      },
    });
    store.dispatch.cart.REMOVE_FROM_CART({ id: "ID" });
    expect(getCart()).toEqual({
      addedIds: [],
      quantityById: {},
    });
  });

  it("should reset the cart state to his INITIAL_STATE", () => {
    store.dispatch.cart.ADD_TO_CART({ id: "ID" });
    expect(getCart()).toEqual({
      addedIds: ["ID"],
      quantityById: {
        ID: 1,
      },
    });
    store.dispatch.cart.RESTORE_CART();
    expect(getCart()).toEqual({
      addedIds: [],
      quantityById: {},
    });
  });
});
