import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import createLoadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";
import createImmerPlugin from "@rematch/immer";
import createSelectPlugin from "@rematch/select";
import createPersistPlugin from "@rematch/persist";

import storage from "redux-persist/lib/storage";

import { shop, cart, RootModel } from "./models";

type FullModel = ExtraModelsFromLoading<RootModel>;

export const store = init<RootModel, FullModel>({
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

export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
