import React from "react";
import { render } from "@testing-library/react";
import { CartProduct } from ".";

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

describe("CartProduct", () => {
  it("should render the cart product correctly", () => {
    const { getByText, getByRole, getByLabelText, container } = render(
      <CartProduct product={productJson} quantity={1} />
    );

    expect(getByText(productJson.productName)).toBeInTheDocument();
    expect(getByRole("img")).toBeInTheDocument();
    expect(getByText("$1.00")).toBeInTheDocument();
    expect(getByLabelText("remove")).toBeInTheDocument();
    expect(getByLabelText("purchase more")).toBeInTheDocument();
    expect(getByLabelText("product quantity")).toBeInTheDocument();
    expect(getByLabelText("product quantity")).toContainHTML("1");
    expect(getByLabelText("purchase more")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should render the quantity correctly", () => {
    const { getByLabelText } = render(
      <CartProduct product={productJson} quantity={1423} />
    );
    expect(getByLabelText("product quantity")).toContainHTML("1423");
  });
});
