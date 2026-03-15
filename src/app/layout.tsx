"use client";

import Header from "@/components/Header.tsx";
import { CartContext } from "@/contexts/CartContext.ts";
import { FilterContext } from "@/contexts/FilterContext.ts";
import { CartUnit, Category } from "@/types/types.ts";
import { Roboto } from "next/font/google";
import { useState } from "react";
import "./globals.css";

const roboto = Roboto({
	subsets: ["latin"],
});
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [cart, setCart] = useState<CartUnit[]>([]);
	const [showCart, setShowCart] = useState<boolean>(false);

	const [keyword, setKeyword] = useState<string>("");
	const [categories, setCategories] = useState<Category[]>([]);
	const [minPrice, setMinPrice] = useState<number>(0);
	const [maxPrice, setMaxPrice] = useState<number>(500);
	return (
		<html lang="en">
			<body
				className={`${roboto.className} antialiased text-gray-950 h-full ${showCart ? "overflow-y-hidden" : ""}`}
			>
				<CartContext.Provider value={{ cart, setCart, showCart, setShowCart }}>
					<FilterContext.Provider
						value={{
							keyword,
							categories,
							minPrice,
							maxPrice,
							setKeyword,
							setCategories,
							setMinPrice,
							setMaxPrice,
						}}
					>
						<Header></Header>
						<div className="flex justify-center">{children}</div>
					</FilterContext.Provider>
				</CartContext.Provider>
			</body>
		</html>
	);
}
