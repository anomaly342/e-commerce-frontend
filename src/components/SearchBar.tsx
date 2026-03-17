import Filter from "@/components/Filter.tsx";
import useFilter from "@/hooks/useFilter.ts";

export default function SearchBar() {
	const { keyword, handleKeywordChange } = useFilter();

	return (
		<div className="flex items-center">
			<input
				className="bg-gray-100 px-3 py-3 border-none rounded-xl xl:w-96"
				type="text"
				placeholder="Product name"
				value={keyword}
				onChange={handleKeywordChange}
			/>
			<Filter></Filter>
		</div>
	);
}
