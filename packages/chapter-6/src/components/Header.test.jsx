import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { store } from "../store";
import { Header } from "./Header";
import { renderWithRematchStore } from "../../test/utils";

describe("Header", () => {
  beforeEach(() => store.dispatch({ type: "RESET" }));
  it("should be rendered correctly", () => {
    renderWithRematchStore(<Header />, store);
    expect(screen.queryByText("Ama")).toBeInTheDocument();
    expect(screen.queryByText("zhop")).toBeInTheDocument();
    expect(screen.queryByRole("textbox")).toBeInTheDocument();
    expect(screen.queryByRole("button")).toBeInTheDocument();
  });

  it("should change the input text value", () => {
    renderWithRematchStore(<Header />, store);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Some search value");
    expect(input).toHaveValue("Some search value");
  });

  it("should reset the input text value", () => {
    renderWithRematchStore(<Header />, store);
    const buttonReset = screen.getByRole("button");
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Some search value");
    expect(input).toHaveValue("Some search value");
    userEvent.click(buttonReset);
    expect(store.getState().shop.query).toEqual(false);
    expect(input).toHaveValue("");
  });

  it("should dispatch an action to the store when pressing Enter", () => {
    renderWithRematchStore(<Header />, store);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Some search value");
    expect(input).toHaveValue("Some search value");
    userEvent.keyboard("[Enter]");
    expect(store.getState().shop.query).toEqual("Some search value");
  });
});
