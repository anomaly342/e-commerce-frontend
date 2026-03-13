"use client";
import CartIcon from "./CartIcon.tsx";

export default function Header() {
	return (
		<header className="flex justify-between items-center px-4 py-3">
			<div className="font-semibold text-xl">Store</div>
			<CartIcon></CartIcon>
		</header>
	);
}
