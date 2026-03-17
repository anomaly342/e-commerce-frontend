"use client";

import Cart from "@/components/Cart.tsx";
import CartIcon from "@/components/icons/CartIcon";
import SearchBar from "@/components/SearchBar.tsx";
import useCart from "@/hooks/useCart.ts";
import { motion } from "framer-motion";
export default function Header() {
	const { showCart, totalQuantity, toggleShowCart } = useCart();

	return (
		<header className="top-0 z-10 sticky flex justify-between items-center bg-white px-4 py-5 border-b border-b-blue-800">
			<div className="font-semibold text-2xl">Store</div>
			<SearchBar></SearchBar>
			<div className="relative cursor-pointer" onClick={toggleShowCart}>
				<CartIcon></CartIcon>
				<label
					className={`-top-1/4 -right-1/8 absolute cursor-pointer bg-orange-400 px-1 py-1 rounded-md text-right font-bold text-white overflow-hidden ${totalQuantity === 0 ? "hidden" : ""}`}
				>
					<motion.p
						key={totalQuantity}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -50 }}
						transition={{ duration: 0.3 }}
					>
						{totalQuantity}
					</motion.p>
				</label>
			</div>

			<Cart showCart={showCart} toggleShowCart={toggleShowCart}></Cart>
			<div
				className={`top-0 left-0 z-10 absolute bg-black opacity-40 w-screen h-screen ${showCart ? "" : "hidden"}`}
			></div>
		</header>
	);
}
