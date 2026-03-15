"use client";

import Header from "@/app/components/Header.tsx";
import { CartContext } from "@/app/contexts/CartContext.ts";
import { CartUnit } from "@/app/types/types.ts";
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
	return (
		<html lang="en">
			<body
				className={`${roboto.className} antialiased text-gray-950 h-full ${showCart ? "overflow-y-hidden" : ""}`}
			>
				<CartContext.Provider value={{ cart, setCart, showCart, setShowCart }}>
					<Header></Header>
					<div className="flex justify-center">{children}</div>
				</CartContext.Provider>
			</body>
		</html>
	);
}
