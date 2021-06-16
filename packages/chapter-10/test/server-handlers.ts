import { rest } from "msw";
import { products } from "../api/db.json";

export const handlers = [
  rest.get("http://localhost:8000/products", (req, res, ctx) => {
    const limit = Number(req.url.searchParams.get("_limit"));
    const header: Record<string, any> = { "x-total-count": products.length };
    return res(ctx.set(header), ctx.json(products.slice(0, limit)));
  }),
  rest.patch("http://localhost:8000/products/:id", (req, res, ctx) => {
    const { favorite } = req.body as Record<string, any>;
    const { id } = req.params;
    const modifiedProduct = products.find((p) => p.id === id);
    if (!modifiedProduct) return res(ctx.json({}));
    modifiedProduct.favorite = favorite;
    return res(ctx.json(modifiedProduct));
  }),
];
