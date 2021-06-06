import { store, dispatch } from "../index";
import { filterByName } from "./shop";

const getShop = () => store.getState().shop;

describe("Shop model", () => {
  beforeEach(() => dispatch({ type: "RESET" }));

  it("should return the initial state", () => {
    expect(getShop()).toEqual({
      currentPage: 1,
      products: [],
      query: "",
      totalCount: 0,
    });
  });

  it("should run getProducts effect and recover 10 products", async () => {
    await dispatch.shop.getProducts();
    expect(getShop().products.length).toEqual(10);
    expect(getShop().totalCount).toEqual(1000);
  });

  it("should run setFavorite effect and modify the favorite property", async () => {
    await dispatch.shop.getProducts();
    const productToFind = getShop().products[0];
    expect(productToFind.favorite).toEqual(true);
    await dispatch.shop.setToFavorite({
      id: productToFind.id,
    });
    expect(getShop().products[0].favorite).toEqual(false);
  });

  it("filterByName util works correctly", async () => {
    await dispatch.shop.getProducts();
    const result = filterByName(store.getState(), "Unbranded");
    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "favorite": false,
          "id": "41fd4fd9-95c7-4809-96db-a147d352fdbb",
          "image_url": "https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair",
          "price": 43,
          "productDescription": "Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.",
          "productName": "Unbranded Metal Chair",
          "stock": 8,
        },
      ]
    `);
  });
});
