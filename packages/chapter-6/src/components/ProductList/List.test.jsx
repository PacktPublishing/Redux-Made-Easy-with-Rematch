import React from "react";
import { waitFor } from "@testing-library/react";
import { List } from "./List";
import { store } from "../../store";
import { renderWithRematchStore } from "../../../test/utils";

describe("List", () => {
  it("should render the first ten products correctly", async () => {
    const { getByRole, getAllByRole } = renderWithRematchStore(<List />, store);

    await waitFor(() => {
      expect(getByRole("list")).toBeInTheDocument();
      expect(getAllByRole("listitem").length).toEqual(10);
    });
  });
});
