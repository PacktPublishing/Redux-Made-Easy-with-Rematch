import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

export const renderWithRematchStore = (ui, store) =>
  render(ui, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
  });
