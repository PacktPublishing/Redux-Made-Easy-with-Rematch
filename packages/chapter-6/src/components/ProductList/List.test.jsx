import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { List } from "./List";
import { store } from "../../store";
import { renderWithRematchStore } from "../../../test/utils";

describe("List", () => {
  beforeEach(() => store.dispatch({ type: "RESET" }));
  it("should render the first ten products correctly", async () => {
    renderWithRematchStore(<List />, store);

    expect(await screen.findByRole("list", { name: "" })).toBeInTheDocument();
    expect((await screen.findAllByRole("listitem")).length).toEqual(10);
  });

  it("should trigger dispatch when click favorite button", async () => {
    renderWithRematchStore(<List />, store);

    expect(await screen.findAllByRole("listitem")).toBeDefined();
    const likeButtonFirstProduct = screen.getAllByLabelText("like")[0];
    expect(likeButtonFirstProduct).toHaveClass("text-red-500");
    userEvent.click(likeButtonFirstProduct);
    await waitFor(() => {
      expect(likeButtonFirstProduct).toHaveClass("text-gray-400");
    });
  });
});
