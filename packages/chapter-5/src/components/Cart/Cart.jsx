import React from "react";
import { CartProduct } from "./CartProduct";
import { number } from "../../utils/formatters";

export const Cart = () => (
  <div className="bg-white border shadow-sm divide-y sticky top-0 h-screen pt-16 overflow-y-auto">
    <header className="p-3 flex justify-between items-center">
      <div>
        <h3 className="font-medium text-lg">Your total cart:</h3>
        <span aria-label="total cart">{number(1404.21)}</span>
      </div>
      <button type="button" className="rounded-md p-2 bg-gray-900 text-white">
        Clear
      </button>
    </header>
    <div role="list" className="divide-y divide-gray-100">
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </div>
  </div>
);
