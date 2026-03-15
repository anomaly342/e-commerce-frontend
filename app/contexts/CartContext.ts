import { CartContextType } from "@/app/types/types.ts";
import { createContext } from "react";

export const CartContext = createContext<CartContextType>(
	{} as CartContextType,
);
