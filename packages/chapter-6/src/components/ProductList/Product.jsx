import React from "react";
import clsx from "clsx";
import { dispatch } from "../../store";
import { number } from "../../utils/formatters";

export const Product = ({ product }) => {
  const hasStock = product.stock > 0;
  return (
    <div
      role="listitem"
      className="w-auto border rounded-md shadow-sm bg-white flex flex-col"
    >
      <img
        loading="lazy"
        src={product.image_url}
        alt="Product"
        className="w-full rounded-t"
      />
      <div className="flex-grow p-6">
        <h1 className="text-xl font-semibold">{product.productName}</h1>
        <div className="text-xl font-medium text-gray-500">
          {number(product.price)}
        </div>
        <div
          className={clsx(
            "w-full text-sm font-medium mt-2",
            hasStock ? "text-green-500" : "text-red-500"
          )}
        >
          {hasStock ? "In stock" : "No stock"}
        </div>
        <div className="text-sm text-gray-400 overflow-ellipsis overflow-hidden truncate ...">
          {product.productDescription}
        </div>
      </div>
      <div className="flex space-x-3 mb-4 text-sm font-semibold px-6">
        <div className="flex-auto flex space-x-3">
          <button
            disabled={!hasStock}
            onClick={() => dispatch.cart.ADD_TO_CART(product)}
            className="w-full flex items-center justify-center rounded-md disabled:opacity-50 disabled:cursor-not-allowed bg-gray-900 text-white"
            type="button"
          >
            Add to cart
          </button>
        </div>
        <button
          onClick={() =>
            dispatch.shop.setToFavorite({
              id: product.id,
              favorite: !product.favorite,
            })
          }
          type="button"
          aria-label="like"
          className={clsx(
            "flex-none flex items-center justify-center w-9 h-9 rounded-md border border-gray-300",
            product.favorite ? "text-red-500" : "text-gray-400"
          )}
        >
          <svg width="20" height="20" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
