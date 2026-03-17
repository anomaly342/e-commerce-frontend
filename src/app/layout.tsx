"use client";

import Header from "@/components/Header.tsx";
import { CartProvider } from "@/contexts/CartProvider.tsx";
import { FilterProvider } from "@/contexts/FilterProvider";
import { ToastProvider } from "@/contexts/ToastProvider";
import useCart from "@/hooks/useCart.ts";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	subsets: ["latin"],
});
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { showCart } = useCart();
	return (
		<html lang="en">
			<body
				className={`${roboto.className} antialiased text-gray-950 h-full ${showCart ? "overflow-y-hidden" : ""}`}
			>
				<ToastProvider>
					<CartProvider>
						<FilterProvider>
							<Header></Header>
							<div className="flex justify-center">{children}</div>
						</FilterProvider>
					</CartProvider>
				</ToastProvider>
			</body>
		</html>
	);
}
