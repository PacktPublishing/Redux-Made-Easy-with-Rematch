import ApiClient from "../../utils/apiClient";

const api = new ApiClient();

export const filterByName = (rootState, query) =>
  rootState.shop.products.filter((product) =>
    product.productName.toLowerCase().includes(query)
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
      return {
        products: [...state.products, ...products],
        currentPage: state.currentPage + 1,
        totalCount,
      };
    },
    SET_QUERY(state, query) {
      return {
        ...state,
        query,
      };
    },
    SET_FAVORITE(state, { id, favorite }) {
      const products = [...state.products];
      const modifiedProduct = products.findIndex(
        (product) => product.id === id
      );
      if (modifiedProduct !== -1) {
        products[modifiedProduct].favorite = favorite;
      }
      return {
        ...state,
        products,
      };
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
    async setToFavorite({ id, favorite }) {
      const { data } = await api.patch(`/products/${id}`, { favorite });
      this.SET_FAVORITE({ id: data.id, favorite: data.favorite });
    },
  }),
};
