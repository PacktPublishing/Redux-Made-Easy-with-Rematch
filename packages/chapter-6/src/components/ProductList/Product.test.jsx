import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRematchStore } from "../../../test/utils";
import { Product } from ".";
import { store } from "../../store";

const productJson = {
  id: "b590e450-1e0c-4344-92b8-e1f6cc260587",
  image_url:
    "https://dummyimage.com/400x400/adca70/000&text=Fantastic Wooden Sausages",
  stock: 0,
  productName: "Fantastic Wooden Sausages",
  price: 1,
  productDescription:
    "Ea qui et. Minus minima omnis. Nisi temporibus quam vel doloribus tempore ut possimus repellendus minus. Aut et repudiandae et dolorum ut consectetur. Qui laborum tenetur corporis odit architecto. Rerum neque odit.",
  favorite: false,
};

describe("Product", () => {
  it("should render the product correctly", () => {
    render(<Product product={productJson} />);

    expect(screen.getByText(productJson.productName)).toBeInTheDocument();
    expect(
      screen.getByText(productJson.productDescription)
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText("$1.00")).toBeInTheDocument();
    expect(screen.getByText("No stock")).toBeInTheDocument();
    expect(screen.getByText("Add to cart")).toBeInTheDocument();
    expect(screen.getByText("Add to cart")).toBeDisabled();
  });

  it("should render stock if the product has stock", () => {
    render(<Product product={{ ...productJson, stock: 1 }} />);
    expect(screen.getByText("In stock")).toBeInTheDocument();
    expect(screen.getByText("Add to cart")).toBeEnabled();
  });

  it("should paint the favorite button red, when favorite is on", () => {
    render(<Product product={{ ...productJson, favorite: true }} />);
    expect(screen.getByLabelText("like")).toBeInTheDocument();
    expect(screen.getByLabelText("like")).toHaveClass("text-red-500");
  });

  it("should not paint the favorite button, when favorite is off", () => {
    render(<Product product={productJson} />);
    expect(screen.getByLabelText("like")).toBeInTheDocument();
    expect(screen.getByLabelText("like")).toHaveClass("text-gray-400");
  });

  describe("with Rematch store", () => {
    afterEach(() => store.dispatch({ type: "RESET" }));
    it("should dispatch add to cart when has stock", () => {
      renderWithRematchStore(
        <Product product={{ ...productJson, stock: 1 }} />,
        store
      );
      expect(screen.getByText("Add to cart")).toBeInTheDocument();
      userEvent.click(screen.getByText("Add to cart"));
      expect(store.getState().cart).toEqual({
        addedIds: ["b590e450-1e0c-4344-92b8-e1f6cc260587"],
        quantityById: {
          "b590e450-1e0c-4344-92b8-e1f6cc260587": 1,
        },
      });
    });
    it("should NOT dispatch add to cart when hasn't stock", () => {
      renderWithRematchStore(<Product product={productJson} />, store);
      expect(screen.getByText("Add to cart")).toBeInTheDocument();
      userEvent.click(screen.getByText("Add to cart"));
      expect(store.getState().cart).toEqual({ addedIds: [], quantityById: {} });
    });
  });
});
