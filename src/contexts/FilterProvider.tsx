import {
	Category,
	FilterContextType,
	PriceRange,
	SortOption,
} from "@/types/types.ts";
import { createContext, useState } from "react";

export const FilterContext = createContext<FilterContextType>({
	keyword: "",
	categories: {
		"men's clothing": true,
		"women's clothing": true,
		electronics: true,
		jewelery: true,
	},
	priceRange: "none",
	sort: "name",
} as FilterContextType);

export function FilterProvider({ children }: { children: React.ReactNode }) {
	const [keyword, setKeyword] = useState<string>("");
	const [categories, setCategories] = useState<{ [key in Category]: boolean }>({
		"men's clothing": true,
		"women's clothing": true,
		electronics: true,
		jewelery: true,
	});
	const [priceRange, setPriceRange] = useState<PriceRange>("none");
	const [sort, setSort] = useState<SortOption>("name");

	return (
		<FilterContext.Provider
			value={{
				keyword,
				categories,
				priceRange,
				sort,
				setKeyword,
				setCategories,
				setPriceRange,
				setSort,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
}
