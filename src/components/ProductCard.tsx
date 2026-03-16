"use client";
import { Product } from "@/types/types.ts";
import { memo } from "react";

const ProductCard = memo(
	({
		id,
		image,
		title,
		price,
		category,
		increase,
	}: Product & { increase: (id: number) => void }) => {
		console.log(title, "rerenders");
		return (
			<div
				className="flex flex-col shadow-md hover:shadow-sky-400 mt-8 px-2 py-4 rounded-md w-full h-96 transition"
				key={id}
			>
				<div className="h-7/12">
					<img
						className="w-full h-full object-contain"
						src={image}
						alt={title}
					/>
				</div>

				<div className="flex flex-col flex-1 justify-between px-5 py-4 s">
					<h3 className="text-2lg text-gray-800">{title}</h3>
					<div className="flex justify-between items-center">
						<h4 className="text-gray-700 text-lg">${price}</h4>
						<button
							className="bg-sky-600 shadow-md px-3 py-4 border-none rounded-md font-bold text-white cursor-pointer"
							onClick={() => increase(id)}
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		);
	},
);

export default ProductCard;
