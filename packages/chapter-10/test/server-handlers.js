import { rest } from "msw";
import { products } from "../api/db.json";

export const handlers = [
  rest.get("http://localhost:8000/products", (req, res, ctx) => {
    const limit = req.url.searchParams.get("_limit");
    const header = { "x-total-count": products.length };
    return res(ctx.set(header), ctx.json(products.slice(0, limit)));
  }),
  rest.patch("http://localhost:8000/products/:id", (req, res, ctx) => {
    const { favorite } = req.body;
    const { id } = req.params;
    const modifiedProduct = products.find((p) => p.id === id);
    modifiedProduct.favorite = favorite;
    return res(ctx.json(modifiedProduct));
  }),
];
