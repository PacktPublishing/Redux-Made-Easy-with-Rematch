import { createModel, RematchRootState } from "@rematch/core";

import ApiClient from "../../utils/apiClient";
import type { RootModel } from ".";
import type { ProductType } from "../../types";

const api = new ApiClient();

export const filterByName = (
  rootState: RematchRootState<RootModel>,
  query: string
) =>
  rootState.shop.products.filter((product) =>
    product.productName.toLowerCase().includes(query.toLowerCase())
  );

type ShopState = {
  products: Array<ProductType>;
  currentPage: number;
  totalCount: number;
  query: string | boolean;
};

export const shop = createModel<RootModel>()({
  state: {
    products: [],
    currentPage: 1,
    totalCount: 0,
    query: "",
  } as ShopState,
  reducers: {
    SET_PRODUCTS(
      state,
      {
        products,
        totalCount,
      }: { products: Array<ProductType>; totalCount: number }
    ) {
      state.products.push(...products);
      state.currentPage += 1;
      state.totalCount = totalCount;
      return state;
    },
    SET_QUERY(state, query: string | boolean) {
      state.query = query;
      return state;
    },
    SET_FAVORITE(
      state,
      {
        indexToModify,
        product,
      }: { indexToModify: number; product: ProductType }
    ) {
      state.products[indexToModify] = product;
      return state;
    },
  },
  effects: (dispatch) => ({
    async getProducts(_, rootState) {
      const { currentPage } = rootState.shop;
      const { data, headers } = await api.get("/products", {
        _page: currentPage,
        _limit: 10,
      });
      const totalCount = parseInt((headers as any).get("x-total-count"), 10);
      dispatch.shop.SET_PRODUCTS({ products: data, totalCount });
    },
    async setToFavorite({ id }: { id: string }, rootState) {
      const productIndex = rootState.shop.products.findIndex(
        (el) => el.id === id
      );
      if (productIndex === -1) return;
      const product = rootState.shop.products[productIndex];
      const { data } = await api.patch(`/products/${id}`, {
        favorite: !product.favorite,
      });
      dispatch.shop.SET_FAVORITE({
        indexToModify: productIndex,
        product: data,
      });
    },
  }),
});
