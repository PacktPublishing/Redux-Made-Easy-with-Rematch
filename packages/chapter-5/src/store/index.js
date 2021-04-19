import { init } from "@rematch/core";
import * as models from "./models";

export const store = init({
  models,
  redux: {
    devtoolOptions: {
      disabled: import.meta.env.PROD,
    },
  },
});
export const { dispatch } = store;
