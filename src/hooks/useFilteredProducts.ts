import useData from "@/hooks/useData.ts";
import useFilter from "@/hooks/useFilter.ts";
import { useMemo } from "react";

export default function useFilterProducts() {
	const { data } = useData();
	const { keyword, categories, priceRange } = useFilter();
	const minPrice = () => {
		if (priceRange === "none" || priceRange === "under $50") {
			return 0;
		} else if (priceRange === "$50-$200") {
			return 50;
		} else {
			return 200;
		}
	};

	const maxPrice = () => {
		if (priceRange === "none") {
			return 1000;
		} else if (priceRange === "under $50") {
			return 50;
		} else if (priceRange === "$50-$200") {
			return 200;
		} else {
			return 1000;
		}
	};
	const filteredProducts = useMemo(() => {
		return data
			? data.filter(
					(e) =>
						e.title.toLowerCase().includes(keyword.toLocaleLowerCase()) &&
						categories[e.category] &&
						e.price >= minPrice() &&
						e.price <= maxPrice(),
				)
			: [];
	}, [data, keyword, categories, priceRange]);

	return { filteredProducts };
}
