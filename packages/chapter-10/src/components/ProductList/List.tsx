import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useInfiniteScroll from "react-infinite-scroll-hook";

import { dispatch } from "../../store";
import { Product } from "./Product";
import { Spinner } from "../Spinner";
import { filterByName } from "../../store/models/shop";

import type { RootState } from "../../store";

export const List = () => {
  const isLoading = useSelector(
    (rootState: RootState) => rootState.loading.effects.shop.getProducts
  );
  const query = useSelector((rootState: RootState) => rootState.shop.query);
  const products = useSelector((rootState: RootState) =>
    query ? filterByName(rootState, query.toString()) : rootState.shop.products
  );
  const totalCount = useSelector(
    (rootState: RootState) => rootState.shop.totalCount
  );

  const hasNextPage = products.length < totalCount;
  const [infiniteRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage,
    onLoadMore: () => dispatch.shop.getProducts(),
  });

  useEffect(() => {
    dispatch.shop.getProducts();
  }, []);

  return (
    <div className="bg-gray-100 p-3 pt-20">
      <div
        role="list"
        className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-8 2xl:gap-5 3xl:gap-5"
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {(isLoading || (hasNextPage && !query)) && (
        <div className="mt-5" ref={infiniteRef}>
          <Spinner />
        </div>
      )}
    </div>
  );
};
