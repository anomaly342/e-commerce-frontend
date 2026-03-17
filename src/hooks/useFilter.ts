import { FilterContext } from "@/contexts/FilterProvider";
import { Category, PriceRange } from "@/types/types.ts";
import { ChangeEvent, useContext, useState } from "react";

export default function useFilter() {
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

	return {
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
