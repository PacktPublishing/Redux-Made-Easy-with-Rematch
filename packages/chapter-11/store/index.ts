import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import createLoadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";
import createImmerPlugin from "@rematch/immer";
import createSelectPlugin from "@rematch/select";

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
  ],
});

export const { dispatch } = store;

export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
