import { init } from "@rematch/core";
import createLoadingPlugin from "@rematch/loading";
import createImmerPlugin from "@rematch/immer";
import createSelectPlugin from "@rematch/select";

import { shop, cart } from "./models";

export const store = init({
  models: { shop, cart },
  redux: {
    rootReducers: {
      RESET: () => undefined,
    },
  },
  plugins: [createLoadingPlugin(), createSelectPlugin(), createImmerPlugin()],
});

export const { dispatch } = store;
