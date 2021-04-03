import React from "react";

export const Product = () => {
	return (
		<div className="w-auto border rounded-md shadow-sm bg-white flex flex-col">
			<img src="https://via.placeholder.com/150" className="w-full rounded-t" />
			<div className="flex-grow p-6">
				<h1 className="text-xl font-semibold">Utility Jacket</h1>
				<div className="text-xl font-medium text-gray-500">$110.00</div>
				<div className="w-full text-sm font-medium text-green-500 mt-2">In stock</div>
				<div className="text-sm text-gray-400">
              Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.
				</div>
			</div>
			<div className="flex space-x-3 mb-4 text-sm font-semibold px-6">
				<div className="flex-auto flex space-x-3">
					<button className="w-full flex items-center justify-center rounded-md bg-gray-900 text-white" type="button">Add to bag</button>
				</div>
				<button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
					<svg width="20" height="20" fill="currentColor">
						<path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
					</svg>
				</button>
			</div>
		</div>
	);
};