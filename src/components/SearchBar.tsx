import useFilteredProducts from "@/hooks/useFilteredProducts.ts";

export default function SearchBar() {
	const { keyword, handleKeywordChange } = useFilteredProducts();
	return (
		<div className="flex">
			<input
				className="bg-gray-100 px-3 py-3 border-none rounded-xl xl:w-96"
				type="text"
				placeholder="Product name"
				value={keyword}
				onChange={handleKeywordChange}
			/>
		</div>
	);
}
