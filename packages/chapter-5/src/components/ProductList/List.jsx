import React from "react";
import { Product } from "./Product";

export const List = () => (
  <div className="bg-gray-100 p-3 pt-20">
    <div
      role="list"
      className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-8 2xl:gap-5 3xl:gap-5"
    >
      <Product />
      <Product />
      <Product />
    </div>
  </div>
);
