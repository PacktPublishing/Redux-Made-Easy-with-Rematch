import { init } from "@rematch/core";
import { shop, cart } from "./models";

export const store = init({
  models: { shop, cart },
});

export const { dispatch } = store;
