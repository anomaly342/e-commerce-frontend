"use client";

import Cart from "@/components/Cart.tsx";
import CartIcon from "@/components/icons/CartIcon";
import SearchBar from "@/components/SearchBar.tsx";
import useCart from "@/hooks/useCart.ts";

export default function Header() {
	const { showCart, toggleShowCart } = useCart();
	return (
		<header className="top-0 sticky flex justify-between items-center bg-white px-4 py-5 border-b border-b-blue-800">
			<div className="font-semibold text-2xl">Store</div>
			<SearchBar></SearchBar>
			<CartIcon toggleShowCart={toggleShowCart}></CartIcon>
			<Cart showCart={showCart} toggleShowCart={toggleShowCart}></Cart>
			<div
				className={`top-0 left-0 z-10 absolute bg-black opacity-40 w-screen h-screen ${showCart ? "" : "hidden"}`}
			></div>
		</header>
	);
}
