import Checkbox from "@/components/Checkbox.tsx";
import FilterIcon from "@/components/icons/FilterIcon.tsx";
import Radio from "@/components/Radio.tsx";
import useFilter from "@/hooks/useFilter.ts";
import { Category } from "@/types/types.ts";
import { useState } from "react";

const radios = [
	{
		id: "none",
		name: "price",
		value: "none",
	},
	{
		id: "under $50",
		name: "price",
		value: "a",
	},
	{
		id: "$50-$200",
		name: "price",
		value: "b",
	},
	{
		id: "over $200",
		name: "price",
		value: "c",
	},
];

const checkboxes: { id: Category }[] = [
	{
		id: "men's clothing",
	},
	{
		id: "women's clothing",
	},
	{
		id: "electronics",
	},
	{
		id: "jewelery",
	},
];

export default function SearchBar() {
	const { keyword, handleKeywordChange } = useFilter();
	const [showFilter, setShowFilter] = useState<boolean>(false);
	return (
		<div className="flex items-center">
			<input
				className="bg-gray-100 px-3 py-3 border-none rounded-xl xl:w-96"
				type="text"
				placeholder="Product name"
				value={keyword}
				onChange={handleKeywordChange}
			/>
			<div>
				<FilterIcon className="ml-4 size-8 cursor-pointer"></FilterIcon>
				<div className="left-0 absolute bg-amber-300 px-6 py-6 rounded-md w-screen">
					<div>
						<h3 className="text-gray-800">Categories</h3>
						<ul className="flex flex-wrap gap-2 mt-3 list-none">
							{checkboxes.map((e, i) => (
								<Checkbox id={e.id} key={i}></Checkbox>
							))}
						</ul>
					</div>
					<div>
						<h3 className="mt-5 text-gray-800">Price Range</h3>
						<ul className="flex flex-wrap gap-2 mt-3 list-none">
							{radios.map((e, i) => (
								<Radio id={e.id} name={e.name} value={e.value} key={i}></Radio>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
