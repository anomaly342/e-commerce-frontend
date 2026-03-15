"use client";

import ProductCard from "@/components/ProductCard.tsx";
import useCart from "@/hooks/useCart.ts";
import useData from "@/hooks/useData.ts";
import useFilteredProducts from "@/hooks/useFilteredProducts.ts";

export default function ProductList() {
	const { filteredProducts } = useFilteredProducts();
	const { isLoading, error } = useData();
	const { increase } = useCart();
	return (
		<main className="justify-center gap-3 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 w-full max-w-450">
			{isLoading && "loading"}
			{error && "error"}
			{/* Product cards will be rendered if it's not currently fetching and has no error. */}
			{!isLoading &&
				!error &&
				filteredProducts?.map((e) => (
					<ProductCard
						key={e.id}
						id={e.id}
						title={e.title}
						category={e.category}
						image={e.image}
						price={e.price}
						increase={increase}
					></ProductCard>
				))}
		</main>
	);
}
