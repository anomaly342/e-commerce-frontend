import { CartUnit } from "@/app/types/types.ts";
import { memo } from "react";

const CartItem = memo(
	({
		id,
		image,
		title,
		price,
		category,
		quantity,
		increase,
		decrease,
	}: CartUnit & {
		increase: (id: number) => void;
		decrease: (id: number, ignoreQuantity: boolean) => void;
	}) => {
		{
			return (
				<>
					<li className="flex gap-2 px-2 py-4 border-sky-700 border-b h-32">
						<div className="basis-1/4">
							<img
								className="w-full h-full object-contain"
								src={image}
								alt={title}
							/>
						</div>
						<div className="flex flex-col justify-between basis-2/4">
							<div>
								<h3 className="text-gray-800 text-base">{title}</h3>
								<p className="text-gray-600">{category}</p>
							</div>
							<p className="font-bold">${price}</p>
						</div>
						<div className="flex flex-col justify-between mr-4 basis-1/4">
							<p
								className="text-red-500 text-right underline cursor-pointer"
								onClick={() => decrease(id, true)}
							>
								Remove
							</p>
							<div className="flex flex-row-reverse items-center gap-2">
								<button
									className="flex justify-center items-center bg-white border-3 border-sky-700 rounded-full size-7 font-bold text-2xl text-center cursor-pointer"
									onClick={() => increase(id)}
								>
									+
								</button>
								<p className="min-w-[2ch] font-mono text-right">{quantity}</p>
								<button
									className="flex justify-center items-center bg-white border-3 border-sky-700 rounded-full size-7 font-bold text-2xl text-center cursor-pointer"
									onClick={() => decrease(id, false)}
								>
									-
								</button>
							</div>
						</div>
					</li>
				</>
			);
		}
	},
);

export default CartItem;
