import { FilterContext } from "@/contexts/FilterProvider";
import useData from "@/hooks/useData.ts";
import { Category, PriceRange } from "@/types/types.ts";
import { ChangeEvent, useContext, useState } from "react";

export default function useFilter() {
	const { data } = useData();
	const {
		keyword,
		categories,
		priceRange,
		setKeyword,
		setCategories,
		setPriceRange,
	} = useContext(FilterContext);
	const [showFilter, setShowFilter] = useState<boolean>(false);

	const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setKeyword(value);
	};

	const handlePriceRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value as PriceRange;
		setPriceRange(value);
	};

	const handleCategoryChange = (value: Category) => {
		setCategories((prev) => {
			return { ...prev, [value]: !prev[value] };
		});
	};

	const toggleShowFilter = () => {
		setShowFilter((prev) => !prev);
	};

	const minPrice = () => {
		if (priceRange === "none" || priceRange === "a") {
			return 0;
		} else if (priceRange === "b") {
			return 50;
		} else {
			return 200;
		}
	};

	const maxPrice = () => {
		if (priceRange === "none") {
			return 1000;
		} else if (priceRange === "a") {
			return 50;
		} else if (priceRange === "b") {
			return 200;
		} else {
			return 1000;
		}
	};

	const filteredProducts = data
		? data.filter(
				(e) =>
					e.title.toLowerCase().includes(keyword.toLocaleLowerCase()) &&
					categories[e.category] &&
					e.price >= minPrice() &&
					e.price <= maxPrice(),
			)
		: [];

	return {
		filteredProducts,
		keyword,
		categories,
		priceRange,
		showFilter,
		toggleShowFilter,
		handleKeywordChange,
		handlePriceRangeChange,
		handleCategoryChange,
	};
}
