import { lazyStore, Dispatch, RootState } from "@amazhop/logic";

export const store = lazyStore();
export const { dispatch } = store;
export type { Dispatch, RootState };
