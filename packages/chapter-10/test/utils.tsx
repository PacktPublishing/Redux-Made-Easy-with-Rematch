import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import type { Store } from "redux";

export const renderWithRematchStore = (ui: React.ReactElement, store: Store) =>
  render(ui, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
  });
