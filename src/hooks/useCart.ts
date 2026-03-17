import { CartContext } from "@/contexts/CartProvider";
import useData from "@/hooks/useData.ts";
import useFilter from "@/hooks/useFilter.ts";
import useToast from "@/hooks/useToast.ts";
import { CartUnit } from "@/types/types.ts";
import { useCallback, useContext } from "react";

export default function useCart() {
	const { cart, setCart, showCart, setShowCart, totalPrice, totalQuantity } =
		useContext(CartContext);
	const { categories, priceRange } = useFilter();
	const { data } = useData();
	const { addToToast } = useToast();

	const toggleShowCart = () => {
		setShowCart((prev) => !prev);
	};

	const increase = useCallback(
		(id: number) => {
			if (data === undefined) {
				return alert("Cannot add to cart");
			}
			const newItem = data.find((e) => e.id === id);
			if (newItem === undefined) {
				return alert("Product not found");
			}

			// Check if the item already exists in the cart. If true, increment its quantity and mark this cart array as changed
			setCart((prevCart) => {
				let isIncremented = false;
				const nextCart = prevCart.map((e) => {
					if (e.id === id) {
						isIncremented = true;
						return { ...e, quantity: e.quantity + 1 };
					}

					return e;
				});

				if (isIncremented) {
					return nextCart;
				} else {
					return [...nextCart, { ...newItem, quantity: 1 }];
				}
			});

			addToToast("Added to cart successfully!");
		},
		[data],
	);

	const decrease = useCallback((id: number, ignoreQuantity: boolean) => {
		setCart((prevCart) => {
			const nextCart: CartUnit[] = [];
			prevCart.forEach((e) => {
				if (e.id !== id) {
					return nextCart.push(e);
				}

				if (e.quantity !== 1 && ignoreQuantity === false) {
					return nextCart.push({ ...e, quantity: e.quantity - 1 });
				}
			});

			return nextCart;
		});
	}, []);

	const getSummary = () => {
		const summaryObject = cart.reduce(
			(acc, current, index) => {
				for (const [key, value] of Object.entries(current)) {
					acc[`items.${index}.${key}`] = value;
				}

				return acc;
			},
			{} as Record<string, string | number>,
		);
		const categoryString = () => {
			let str = [];
			for (const [key, value] of Object.entries(categories)) {
				if (value === true) {
					str.push(key);
				}
			}

			return str.toString();
		};

		summaryObject["filters.category"] = categoryString();
		summaryObject["filters.priceRange"] = priceRange;
		summaryObject["metadata.timestamp"] = new Date().toISOString();
		console.log(summaryObject);
	};

	return {
		cart,
		totalPrice,
		totalQuantity,
		showCart,
		toggleShowCart,
		increase,
		decrease,
		getSummary,
	};
}
