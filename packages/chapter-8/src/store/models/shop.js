import ApiClient from "../../utils/apiClient";

const api = new ApiClient();

export const filterByName = (rootState, query) =>
  rootState.shop.products.filter((product) =>
    product.productName.toLowerCase().includes(query.toLowerCase())
  );

export const shop = {
  state: {
    products: [],
    currentPage: 1,
    totalCount: 0,
    query: "",
  },
  reducers: {
    SET_PRODUCTS(state, { products, totalCount }) {
      state.products.push(...products);
      state.currentPage += 1;
      state.totalCount = totalCount;
      return state;
    },
    SET_QUERY(state, query) {
      state.query = query;
      return state;
    },
    SET_FAVORITE(state, { indexToModify, product }) {
      state.products[indexToModify] = product;
      return state;
    },
  },
  effects: () => ({
    async getProducts(_, rootState) {
      const { currentPage } = rootState.shop;
      const { data, headers } = await api.get("/products", {
        _page: currentPage,
        _limit: 10,
      });
      const totalCount = parseInt(headers.get("x-total-count"), 10);
      this.SET_PRODUCTS({ products: data, totalCount });
    },
    async setToFavorite({ id }, rootState) {
      const productIndex = rootState.shop.products.findIndex(
        (el) => el.id === id
      );
      if (productIndex === -1) return;
      const product = rootState.shop.products[productIndex];
      const { data } = await api.patch(`/products/${id}`, {
        favorite: !product.favorite,
      });
      this.SET_FAVORITE({ indexToModify: productIndex, product: data });
    },
  }),
};
