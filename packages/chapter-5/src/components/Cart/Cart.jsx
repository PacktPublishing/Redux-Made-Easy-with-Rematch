import React from "react";
import { useSelector } from "react-redux";
import { CartProduct } from "./CartProduct";
import { dispatch } from "../../store";
import { getProduct, getQuantity } from "../../store/models/cart";
import { number } from "../../utils/formatters";

export const Cart = () => {
  const { addedIds, quantityById } = useSelector((rootState) => rootState.cart);
  const cartProducts = useSelector((rootState) =>
    addedIds.map((id) => getProduct(rootState, id))
  );
  const totalPrice = useSelector((rootState) =>
    addedIds.reduce(
      (total, id) =>
        total + getProduct(rootState, id).price * getQuantity(rootState, id),
      0
    )
  );

  return (
    <div className="bg-white border shadow-sm divide-y sticky top-0 h-screen pt-16 overflow-y-auto">
      <header className="p-3 flex justify-between items-center">
        <div>
          <h3 className="font-medium text-lg">Your total cart:</h3>
          <span aria-label="total cart">{number(totalPrice)}</span>
        </div>
        <button
          onClick={() => dispatch.cart.RESTORE_CART()}
          type="button"
          className="rounded-md p-2 bg-gray-900 text-white"
        >
          Clear
        </button>
      </header>
      <div role="list" className="divide-y divide-gray-100">
        {cartProducts.length ? (
          cartProducts.map((product) => (
            <CartProduct
              key={product.id}
              product={product}
              quantity={quantityById[product.id]}
            />
          ))
        ) : (
          <div className="text-center">
            <h5 className="font-medium text-lg pt-6">Empty cart</h5>
          </div>
        )}
      </div>
    </div>
  );
};
