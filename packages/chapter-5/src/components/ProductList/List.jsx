import React from "react";
import { Product } from "./";

export const List = () => {
	return (
		<div className="bg-gray-100 p-3">
			<div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-8 2xl:gap-5 3xl:gap-5">
				<Product />
				<Product />
			</div>
		</div>
	);
};