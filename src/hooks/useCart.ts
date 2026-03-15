import { CartContext } from "@/contexts/CartContext.ts";
import useData from "@/hooks/useData.ts";
import { CartUnit } from "@/types/types.ts";
import { useCallback, useContext } from "react";

export default function useCart() {
	const { data } = useData();
	const { cart, setCart } = useContext(CartContext);
	const { showCart, setShowCart } = useContext(CartContext);
	const totalPrice = cart.reduce((total, current) => {
		return total + current.price * current.quantity;
	}, 0);

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

	return { cart, totalPrice, showCart, toggleShowCart, increase, decrease };
}
