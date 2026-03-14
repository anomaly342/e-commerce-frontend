"use client";
import { useState } from "react";
import useSWR, { Fetcher } from "swr";

import ProductCard from "./components/ProductCard.tsx";
import { Product } from "./types/Product.ts";

const fetcher: Fetcher<Product[], string> = (url) =>
	fetch(url).then((res) => res.json());

export default function ProductList() {
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

	const { data, error, isLoading } = useSWR(
		"https://fakestoreapi.com/products",
		fetcher,
		{
			onSuccess: (data) => {
				setFilteredProducts(data);
			},
		},
	);

	return (
		<main className="justify-center gap-3 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 max-w-450">
			{isLoading && "loading"}
			{error && "error"}
			{/* Product cards will be rendered if it's not currently fetching and has no error. */}
			{!isLoading &&
				!error &&
				filteredProducts.map((e) =>
					ProductCard({
						id: e.id,
						title: e.title,
						price: e.price,
						image: e.image,
						category: e.category,
					}),
				)}
		</main>
	);
}
