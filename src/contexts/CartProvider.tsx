import { CartContextType, CartUnit } from "@/types/types.ts";
import { createContext, useState } from "react";

export const CartContext = createContext<CartContextType>(
	{} as CartContextType,
);

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [cart, setCart] = useState<CartUnit[]>([]);
	const [showCart, setShowCart] = useState<boolean>(false);

	const { totalPrice, totalQuantity } =
		cart === undefined
			? { totalPrice: 0, totalQuantity: 0 }
			: cart.reduce(
					(acc, current) => {
						return {
							totalPrice: acc.totalPrice + current.price * current.quantity,
							totalQuantity: acc.totalQuantity + current.quantity,
						};
					},
					{ totalPrice: 0, totalQuantity: 0 },
				);
	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				showCart,
				setShowCart,
				totalPrice,
				totalQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
