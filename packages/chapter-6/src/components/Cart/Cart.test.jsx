import React from "react";
import { fireEvent } from "@testing-library/react";
import { renderWithRematchStore } from "../../../test/utils";
import { Cart } from ".";
import { store } from "../../store";

describe("Cart", () => {
  afterEach(() => store.dispatch({ type: "RESET" }));
  it("should render the cart component", () => {
    const { getByRole, getByText } = renderWithRematchStore(<Cart />, store);
    expect(getByRole("button")).toBeInTheDocument();
    expect(getByText("Your total cart:")).toBeInTheDocument();
    expect(getByText("$0.00")).toBeInTheDocument();
  });

  it("should render a product on the cart and adjust the total price", async () => {
    await store.dispatch.shop.getProducts();
    const [oneProduct] = store.getState().shop.products;
    store.dispatch.cart.ADD_TO_CART(oneProduct);
    const { getByRole, getAllByText } = renderWithRematchStore(<Cart />, store);
    await expect(getByRole("list")).toBeInTheDocument();
    expect(getByRole("listitem")).toBeInTheDocument();
    expect(getAllByText("$43.00")).toHaveLength(2);
  });

  it("should render two products on the cart and adjust the total price", async () => {
    await store.dispatch.shop.getProducts();
    const [oneProduct, otherProduct] = store.getState().shop.products;
    store.dispatch.cart.ADD_TO_CART(oneProduct);
    store.dispatch.cart.ADD_TO_CART(otherProduct);
    const { getByRole, getAllByRole, getByText } = renderWithRematchStore(
      <Cart />,
      store
    );
    await expect(getByRole("list")).toBeInTheDocument();
    expect(getAllByRole("listitem")).toHaveLength(2);
    expect(getByText("$43.00")).toBeInTheDocument();
    expect(getByText("$98.00")).toBeInTheDocument();
    expect(getByText("$141.00")).toBeInTheDocument();
  });

  it("should reset the cart to his initial state", async () => {
    await store.dispatch.shop.getProducts();
    const [otherProduct] = store.getState().shop.products;
    store.dispatch.cart.ADD_TO_CART(otherProduct);
    const {
      getByRole,
      getByText,
      getAllByText,
      queryByRole,
    } = renderWithRematchStore(<Cart />, store);
    await expect(getByRole("list")).toBeInTheDocument();
    expect(getByRole("listitem")).toBeInTheDocument();
    expect(getAllByText("$43.00")).toHaveLength(2);
    fireEvent.click(getByText("Clear"));
    expect(queryByRole("listitem")).not.toBeInTheDocument();
  });

  it("should increase the quantity of the product on the cart", async () => {
    await store.dispatch.shop.getProducts();
    const [otherProduct] = store.getState().shop.products;
    store.dispatch.cart.ADD_TO_CART(otherProduct);
    const { getByRole, getByLabelText } = renderWithRematchStore(
      <Cart />,
      store
    );
    expect(getByLabelText("total cart")).toContainHTML("$43.00");
    expect(getByRole("listitem")).toBeInTheDocument();
    fireEvent.click(getByLabelText("purchase more"));
    expect(getByLabelText("total cart")).toContainHTML("$86.00");
  });

  it("should decrease the quantity of the product on the cart", async () => {
    await store.dispatch.shop.getProducts();
    const [otherProduct] = store.getState().shop.products;
    store.dispatch.cart.ADD_TO_CART(otherProduct);
    store.dispatch.cart.ADD_TO_CART(otherProduct);
    const { getByRole, getByLabelText } = renderWithRematchStore(
      <Cart />,
      store
    );
    expect(getByLabelText("total cart")).toContainHTML("$86.00");
    expect(getByRole("listitem")).toBeInTheDocument();
    fireEvent.click(getByLabelText("remove"));
    expect(getByLabelText("total cart")).toContainHTML("$43.00");
  });

  it("should remove completely the product from the cart", async () => {
    await store.dispatch.shop.getProducts();
    const [otherProduct] = store.getState().shop.products;
    store.dispatch.cart.ADD_TO_CART(otherProduct);
    const { getByRole, getByLabelText, queryByRole } = renderWithRematchStore(
      <Cart />,
      store
    );
    expect(getByLabelText("total cart")).toContainHTML("$43.00");
    expect(getByRole("listitem")).toBeInTheDocument();
    fireEvent.click(getByLabelText("remove"));
    expect(getByLabelText("total cart")).toContainHTML("$0.00");
    expect(queryByRole("listitem")).not.toBeInTheDocument();
  });
});
