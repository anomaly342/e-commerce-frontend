"use client";
import Cart from "@/app/components/Cart.tsx";
import CartIcon from "@/app/components/CartIcon.tsx";
import useCart from "@/app/hooks/useCart.ts";

export default function Header() {
	const { showCart, setShowCart } = useCart();
	return (
		<header className="top-0 sticky flex justify-between items-center bg-white px-4 py-5 border-b border-b-blue-800">
			<div className="font-semibold text-2xl">Store</div>
			<CartIcon toggleShowCart={() => setShowCart((prev) => !prev)}></CartIcon>
			<Cart
				showCart={showCart}
				toggleShowCart={() => setShowCart((prev) => !prev)}
			></Cart>
			<div
				className={`top-0 left-0 z-10 absolute bg-black opacity-40 w-screen h-screen ${showCart ? "" : "hidden"}`}
			></div>
		</header>
	);
}
