import { Product } from "@/types/types.ts";
import useSWR, { Fetcher } from "swr";

const fetcher: Fetcher<Product[], string> = (url) =>
	fetch(url).then((res) => res.json());

export default function useData() {
	const { data, error, isLoading } = useSWR(
		"https://fakestoreapi.com/products",
		fetcher,
		{},
	);

	return { data, error, isLoading };
}
