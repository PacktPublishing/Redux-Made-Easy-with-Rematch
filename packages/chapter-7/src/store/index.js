import { init } from "@rematch/core";
import createLoadingPlugin from "@rematch/loading";
import { shop, cart } from "./models";

export const store = init({
  models: { shop, cart },
  redux: {
    rootReducers: {
      RESET: () => undefined,
    },
  },
  plugins: [createLoadingPlugin()],
});

export const { dispatch } = store;
