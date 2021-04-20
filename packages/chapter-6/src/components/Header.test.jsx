import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { store } from "../store";
import { Header } from "./Header";

describe("Header", () => {
  it("should be rendered correctly", () => {
    const { getByText, getByRole } = render(<Header />);
    expect(getByText("Ama")).toBeInTheDocument();
    expect(getByText("zhop")).toBeInTheDocument();
    expect(getByRole("textbox")).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("should change the input text value", () => {
    const { getByRole } = render(<Header />);
    const input = getByRole("textbox");
    userEvent.type(input, "Some search value");
    expect(input.value).toEqual("Some search value");
  });

  it("should reset the input text value", () => {
    const { getByRole } = render(<Header />);
    const buttonReset = getByRole("button");
    const input = getByRole("textbox");
    userEvent.type(input, "Some search value");
    expect(input.value).toEqual("Some search value");
    userEvent.click(buttonReset);
    expect(store.getState().shop.query).toEqual(false);
    expect(input.value).toEqual("");
  });

  it("should dispatch an action to the store when pressing Enter", () => {
    const { getByRole } = render(<Header />);
    const input = getByRole("textbox");
    userEvent.type(input, "Some search value");
    expect(input.value).toEqual("Some search value");
    userEvent.keyboard("[Enter]");
    expect(store.getState().shop.query).toEqual("Some search value");
  });
});
