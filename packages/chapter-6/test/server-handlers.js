import { rest } from "msw";
import { products } from "../api/db.json";

const handlers = [
  rest.patch("http://localhost:8000/products/:id", (req, res, ctx) => {
    const { favorite } = req.body;
    const { id } = req.params;
    const modifiedProduct = products.find((p) => p.id === id);
    modifiedProduct.favorite = favorite;
    return res(ctx.json(modifiedProduct));
  }),
  rest.get("http://localhost:8000/products", (req, res, ctx) => {
    const limit = req.url.searchParams.get("_limit");

    return res(
      ctx.set({
        "x-total-count": products.length,
      }),
      ctx.json(products.slice(0, limit))
    );
  }),
];
export { handlers };
