import { FilterContext } from "@/contexts/FilterProvider";
import { Category, PriceRange, SortOption } from "@/types/types.ts";
import { ChangeEvent, useContext, useState } from "react";

export default function useFilter() {
	const {
		keyword,
		categories,
		priceRange,
		sort,
		setKeyword,
		setCategories,
		setPriceRange,
		setSort,
	} = useContext(FilterContext);
	const [showFilter, setShowFilter] = useState<boolean>(false);

	const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setKeyword(value);
	};

	const handlePriceRangeChange = (value: PriceRange) => {
		setPriceRange(value);
	};

	const handleCategoryChange = (value: Category) => {
		setCategories((prev) => {
			return { ...prev, [value]: !prev[value] };
		});
	};

	const handleSortChange = (value: SortOption) => {
		setSort(value);
	};

	const toggleShowFilter = () => {
		setShowFilter((prev) => !prev);
	};

	return {
		showFilter,
		keyword,
		priceRange,
		categories,
		sort,
		toggleShowFilter,
		handleKeywordChange,
		handlePriceRangeChange,
		handleCategoryChange,
		handleSortChange,
	};
}
