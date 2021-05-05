import React from "react";
import { waitFor, screen } from "@testing-library/react";
import { List } from "./List";
import { store } from "../../store";
import { renderWithRematchStore } from "../../../test/utils";

describe("List", () => {
  it("should render the first ten products correctly", async () => {
    renderWithRematchStore(<List />, store);

    await waitFor(() => {
      expect(screen.getByRole("list")).toBeInTheDocument();
      expect(screen.getAllByRole("listitem").length).toEqual(10);
    });
  });
});
