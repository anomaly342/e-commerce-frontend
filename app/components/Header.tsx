"use client";
import CartIcon from "./CartIcon.tsx";

export default function Header() {
	return (
		<header className="flex justify-between items-center px-4 py-5 border-b border-b-blue-800">
			<div className="font-semibold text-2xl">Store</div>
			<CartIcon></CartIcon>
		</header>
	);
}
