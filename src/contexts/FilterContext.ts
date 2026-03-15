import { FilterContextType } from "@/types/types.ts";
import { createContext } from "react";

export const FilterContext = createContext<FilterContextType>(
	{} as FilterContextType,
);
