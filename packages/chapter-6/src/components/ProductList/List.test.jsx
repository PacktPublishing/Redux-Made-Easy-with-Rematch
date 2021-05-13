import React from "react";
import { screen } from "@testing-library/react";

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
});
