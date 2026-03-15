import { FilterContext } from "@/contexts/FilterContext.ts";
import useData from "@/hooks/useData.ts";
import { ChangeEvent, useContext } from "react";

export default function useFilteredProducts() {
	const { data } = useData();
	const {
		keyword,
		categories,
		minPrice,
		maxPrice,
		setKeyword,
		setCategories,
		setMinPrice,
		setMaxPrice,
	} = useContext(FilterContext);

	const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		const value = e.currentTarget.value;
		setKeyword(value);
	};

	const filteredProducts = data
		? data.filter((e) =>
				e.title.toLowerCase().includes(keyword.toLocaleLowerCase()),
			)
		: [];

	return {
		filteredProducts,
		keyword,
		categories,
		minPrice,
		maxPrice,
		handleKeywordChange,
		setCategories,
		setMinPrice,
		setMaxPrice,
	};
}
