import { Category, FilterContextType, PriceRange } from "@/types/types.ts";
import { createContext, useState } from "react";

export const FilterContext = createContext<FilterContextType>(
	{} as FilterContextType,
);

export function FilterProvider({ children }: { children: React.ReactNode }) {
	const [keyword, setKeyword] = useState<string>("");
	const [categories, setCategories] = useState<{ [key in Category]: boolean }>({
		"men's clothing": true,
		"women's clothing": true,
		electronics: true,
		jewelery: true,
	});
	const [priceRange, setPriceRange] = useState<PriceRange>("none");

	return (
		<FilterContext.Provider
			value={{
				keyword,
				categories,
				priceRange,
				setKeyword,
				setCategories,
				setPriceRange,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
}
