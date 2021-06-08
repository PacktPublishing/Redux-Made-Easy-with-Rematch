import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRematchStore } from "../../../test/utils";
import { Cart } from ".";
import { store, dispatch } from "../../store";

describe("Cart", () => {
  beforeEach(() => dispatch({ type: "RESET" }));
  it("should render the cart component", () => {
    renderWithRematchStore(<Cart />, store);
    expect(screen.queryByText("Clear")).toBeInTheDocument();
    expect(screen.queryByText("Your total cart:")).toBeInTheDocument();
    expect(screen.queryByText("$0.00")).toBeInTheDocument();
  });

  it("should render a product on the cart and adjust the total price", async () => {
    await dispatch.shop.getProducts();
    const [oneProduct] = store.getState().shop.products;
    dispatch.cart.ADD_TO_CART(oneProduct);
    renderWithRematchStore(<Cart />, store);
    expect(await screen.findByRole("list")).toBeInTheDocument();
    expect(screen.queryByRole("listitem")).toBeInTheDocument();
    expect(screen.getAllByText("$43.00")).toHaveLength(2);
  });

  it("should render two products on the cart and adjust the total price", async () => {
    await dispatch.shop.getProducts();
    const [oneProduct, otherProduct] = store.getState().shop.products;
    dispatch.cart.ADD_TO_CART(oneProduct);
    dispatch.cart.ADD_TO_CART(otherProduct);
    renderWithRematchStore(<Cart />, store);
    expect(await screen.findByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.queryByText("$43.00")).toBeInTheDocument();
    expect(screen.queryByText("$98.00")).toBeInTheDocument();
    expect(screen.queryByText("$141.00")).toBeInTheDocument();
  });

  it("should reset the cart to his initial state", async () => {
    await dispatch.shop.getProducts();
    const [otherProduct] = store.getState().shop.products;
    dispatch.cart.ADD_TO_CART(otherProduct);
    renderWithRematchStore(<Cart />, store);
    expect(await screen.findByRole("list")).toBeInTheDocument();
    expect(screen.queryByRole("listitem")).toBeInTheDocument();
    expect(screen.getAllByText("$43.00")).toHaveLength(2);
    userEvent.click(screen.getByText("Clear"));
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  it("should increase the quantity of the product on the cart", async () => {
    await dispatch.shop.getProducts();
    const [otherProduct] = store.getState().shop.products;
    dispatch.cart.ADD_TO_CART(otherProduct);
    renderWithRematchStore(<Cart />, store);
    expect(screen.queryByLabelText("total cart")).toContainHTML("$43.00");
    expect(screen.queryByRole("listitem")).toBeInTheDocument();
    userEvent.click(screen.getByLabelText("purchase more"));
    expect(screen.queryByLabelText("total cart")).toContainHTML("$86.00");
  });

  it("should decrease the quantity of the product on the cart", async () => {
    await dispatch.shop.getProducts();
    const [otherProduct] = store.getState().shop.products;
    dispatch.cart.ADD_TO_CART(otherProduct);
    dispatch.cart.ADD_TO_CART(otherProduct);
    renderWithRematchStore(<Cart />, store);
    expect(screen.queryByLabelText("total cart")).toContainHTML("$86.00");
    expect(screen.queryByRole("listitem")).toBeInTheDocument();
    userEvent.click(screen.getByLabelText("remove"));
    expect(screen.queryByLabelText("total cart")).toContainHTML("$43.00");
  });

  it("should remove completely the product from the cart", async () => {
    await dispatch.shop.getProducts();
    const [otherProduct] = store.getState().shop.products;
    dispatch.cart.ADD_TO_CART(otherProduct);
    renderWithRematchStore(<Cart />, store);
    expect(screen.queryByLabelText("total cart")).toContainHTML("$43.00");
    expect(screen.queryByRole("listitem")).toBeInTheDocument();
    userEvent.click(screen.getByLabelText("remove"));
    expect(screen.queryByLabelText("total cart")).toContainHTML("$0.00");
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
