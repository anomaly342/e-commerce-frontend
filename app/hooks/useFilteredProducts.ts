import useData from "@/app/hooks/useData.ts";
import { CartUnit } from "@/app/types/types.ts";
import { useState } from "react";

export default function useFilteredProducts() {
	const { data } = useData();
	const [cart, setCart] = useState<CartUnit[]>([]);

	const filteredProducts = data ? data : [];

	return { filteredProducts, cart };
}
