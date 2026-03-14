import { Product } from "../types/Product.ts";
export default function ProductCard({
	id,
	title,
	price,
	image,
	category,
}: Product) {
	return (
		<div
			className="flex flex-col shadow-md mt-8 px-2 py-4 rounded-md h-96"
			key={id}
		>
			<div className="h-7/12">
				<img className="w-full h-full object-contain" src={image} alt={title} />
			</div>

			<div className="flex flex-col flex-1 justify-between px-5 py-4 s">
				<h3 className="text-2lg text-gray-800">{title}</h3>
				<div className="flex justify-between items-center">
					<h4 className="text-gray-700 text-lg">${price}</h4>
					<button className="bg-sky-600 px-3 py-4 border-none rounded-md font-bold text-white">
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
}
