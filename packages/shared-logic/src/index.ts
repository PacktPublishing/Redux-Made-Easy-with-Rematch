import { init, RematchDispatch, RematchRootState, Plugin } from "@rematch/core";
import createLoadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";
import createImmerPlugin from "@rematch/immer";
import createSelectPlugin from "@rematch/select";

import { shop, cart, RootModel } from "./models";
import { filterByName } from "./models/shop";

type FullModel = ExtraModelsFromLoading<RootModel>;

export const store = <R extends RootModel, M extends FullModel>({
  extraPlugins = []
}: { extraPlugins?: Array<Plugin<R, M>> } = {}) => init<RootModel, FullModel>({
  models: { shop, cart },
  redux: {
    rootReducers: {
      RESET: () => undefined,
    },
  },
  plugins: [
    ...extraPlugins,
    createLoadingPlugin(),
    createSelectPlugin(),
    createImmerPlugin()
  ],
});


export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;

export { filterByName }