import React from "react";

export const Header = () => (
	<div className="grid grid-cols-0/5 grid-rows-1 bg-gray-900 p-3 gap-3 items-center">
		<h1 className="text-white text-3xl font-extrabold tracking-tight underline">
      Ama<span className="bg-clip-text text-transparent bg-gradient-to-l from-purple-400 to-pink-200">zhop</span>
		</h1>
		<input type="text" className="p-2 rounded-md" placeholder="Search products..." />
	</div>
);