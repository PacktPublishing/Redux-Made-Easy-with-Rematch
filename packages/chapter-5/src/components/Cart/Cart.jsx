import React from "react";
import { CartProduct } from "./";

export const Cart = () => {
	return (
		<div className="bg-white border shadow-sm divide-y sticky top-0 h-screen">
			<header className="p-3 flex justify-between items-center">
				<div>
					<h3 className="font-medium text-lg">Your total cart:</h3>
          $1404.21
				</div>
				<button type="button" className="rounded-md p-2 bg-gray-900 text-white">
          Clear
				</button>
			</header>
			<div className="divide-y divide-gray-100">
				<CartProduct />
				<CartProduct />
				<CartProduct />
			</div>
		</div>
	);
};