import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRematchStore } from "../../../test/utils";
import { Cart } from ".";
import { store } from "../../store";

describe("Cart", () => {
  afterEach(() => store.dispatch({ type: "RESET" }));
  it("should render the cart component", () => {
    renderWithRematchStore(<Cart />, store);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Your total cart:")).toBeInTheDocument();
    expect(screen.getByText("$0.00")).toBeInTheDocument();
  });

  it("should render a product on the cart and adjust the total price", async () => {
    await store.dispatch.shop.getProducts();
    const [oneProduct] = store.getState().shop.products;
    store.dispatch.cart.ADD_TO_CART(oneProduct);
    renderWithRematchStore(<Cart />, store);
    await expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getAllByText("$43.00")).toHaveLength(2);
  });

  it("should render two products on the cart and adjust the total price", async () => {
    await store.dispatch.shop.getProducts();
    const [oneProduct, otherProduct] = store.getState().shop.products;
    store.dispatch.cart.ADD_TO_CART(oneProduct);
    store.dispatch.cart.ADD_TO_CART(otherProduct);
    renderWithRematchStore(<Cart />, store);
    await expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("$43.00")).toBeInTheDocument();
    expect(screen.getByText("$98.00")).toBeInTheDocument();
    expect(screen.getByText("$141.00")).toBeInTheDocument();
  });

  it("should reset the cart to his initial state", async () => {
    await store.dispatch.shop.getProducts();
    const [otherProduct] = store.getState().shop.products;
    store.dispatch.cart.ADD_TO_CART(otherProduct);
    renderWithRematchStore(<Cart />, store);
    await expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getAllByText("$43.00")).toHaveLength(2);
    userEvent.click(screen.getByText("Clear"));
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  it("should increase the quantity of the product on the cart", async () => {
    await store.dispatch.shop.getProducts();
    const [otherProduct] = store.getState().shop.products;
    store.dispatch.cart.ADD_TO_CART(otherProduct);
    renderWithRematchStore(<Cart />, store);
    expect(screen.getByLabelText("total cart")).toContainHTML("$43.00");
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    userEvent.click(screen.getByLabelText("purchase more"));
    expect(screen.getByLabelText("total cart")).toContainHTML("$86.00");
  });

  it("should decrease the quantity of the product on the cart", async () => {
    await store.dispatch.shop.getProducts();
    const [otherProduct] = store.getState().shop.products;
    store.dispatch.cart.ADD_TO_CART(otherProduct);
    store.dispatch.cart.ADD_TO_CART(otherProduct);
    renderWithRematchStore(<Cart />, store);
    expect(screen.getByLabelText("total cart")).toContainHTML("$86.00");
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    userEvent.click(screen.getByLabelText("remove"));
    expect(screen.getByLabelText("total cart")).toContainHTML("$43.00");
  });

  it("should remove completely the product from the cart", async () => {
    await store.dispatch.shop.getProducts();
    const [otherProduct] = store.getState().shop.products;
    store.dispatch.cart.ADD_TO_CART(otherProduct);
    renderWithRematchStore(<Cart />, store);
    expect(screen.getByLabelText("total cart")).toContainHTML("$43.00");
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    userEvent.click(screen.getByLabelText("remove"));
    expect(screen.getByLabelText("total cart")).toContainHTML("$0.00");
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
