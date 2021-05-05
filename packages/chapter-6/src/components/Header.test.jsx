import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { store } from "../store";
import { Header } from "./Header";

describe("Header", () => {
  it("should be rendered correctly", () => {
    render(<Header />);
    expect(screen.getByText("Ama")).toBeInTheDocument();
    expect(screen.getByText("zhop")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should change the input text value", () => {
    render(<Header />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Some search value");
    expect(input.value).toEqual("Some search value");
  });

  it("should reset the input text value", () => {
    render(<Header />);
    const buttonReset = screen.getByRole("button");
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Some search value");
    expect(input.value).toEqual("Some search value");
    userEvent.click(buttonReset);
    expect(store.getState().shop.query).toEqual(false);
    expect(input.value).toEqual("");
  });

  it("should dispatch an action to the store when pressing Enter", () => {
    render(<Header />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Some search value");
    expect(input.value).toEqual("Some search value");
    userEvent.keyboard("[Enter]");
    expect(store.getState().shop.query).toEqual("Some search value");
  });
});
