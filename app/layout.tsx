import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./components/Header.tsx";
import "./globals.css";
const roboto = Roboto({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Product Catalog",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.className} antialiased text-gray-950`}>
				<Header></Header>
				{children}
			</body>
		</html>
	);
}
