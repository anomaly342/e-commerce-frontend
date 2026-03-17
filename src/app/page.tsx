"use client";

import ProductCard from "@/components/ProductCard.tsx";
import Skeleton from "@/components/Skeleton.tsx";
import useCart from "@/hooks/useCart.ts";
import useData from "@/hooks/useData.ts";
import useFilterProducts from "@/hooks/useFilteredProducts.ts";
import useToast from "@/hooks/useToast.ts";

export default function ProductList() {
	const { filteredProducts } = useFilterProducts();
	const { isLoading, error } = useData();
	const { increase } = useCart();
	const { toast } = useToast();
	return (
		<main className="justify-center gap-3 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4 px-6 w-full max-w-450">
			<title>Store</title>
			{isLoading &&
				Array(12)
					.fill(0)
					.map((e, i) => <Skeleton key={i}></Skeleton>)}
			{error && "error"}

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

			<div className="right-3 bottom-3 fixed flex flex-col-reverse gap-1">
				{toast.map((e, i) => (
					<p key={i} className="bg-green-300 px-3 py-3 w-fit text-xl">
						{e.message}
					</p>
				))}
			</div>
		</main>
	);
}
