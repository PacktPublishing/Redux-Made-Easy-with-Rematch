import { init } from "@rematch/core";
import createLoadingPlugin from "@rematch/loading";
import createImmerPlugin from "@rematch/immer";
import createSelectPlugin from "@rematch/select";
import createPersistPlugin from "@rematch/persist";

import storage from "redux-persist/lib/storage";

import { shop, cart } from "./models";

export const store = init({
  models: { shop, cart },
  redux: {
    rootReducers: {
      RESET: () => undefined,
    },
  },
  plugins: [
    createLoadingPlugin(),
    createSelectPlugin(),
    createImmerPlugin(),
    createPersistPlugin({
      key: "cart-storage",
      storage,
      whitelist: ["cart", "shop"],
    }),
  ],
});

export const { dispatch } = store;
