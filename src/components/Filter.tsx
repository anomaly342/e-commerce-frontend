import Checkbox from "@/components/Checkbox.tsx";
import FilterIcon from "@/components/icons/FilterIcon.tsx";
import Radio from "@/components/Radio.tsx";
import useFilter from "@/hooks/useFilter.ts";
import { Category, PriceRange, SortOption } from "@/types/types.ts";

const priceOptions: { id: PriceRange; name: "price"; value: PriceRange }[] = [
	{
		id: "none",
		name: "price",
		value: "none",
	},
	{
		id: "under $50",
		name: "price",
		value: "under $50",
	},
	{
		id: "$50-$200",
		name: "price",
		value: "$50-$200",
	},
	{
		id: "over $200",
		name: "price",
		value: "over $200",
	},
];

const sortOptions: { id: SortOption; name: "sort"; value: SortOption }[] = [
	{
		id: "price",
		name: "sort",
		value: "price",
	},
	{
		id: "name",
		name: "sort",
		value: "name",
	},
];
const categoryOptions: { id: Category }[] = [
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

export default function Filter() {
	const {
		showFilter,
		priceRange,
		sort,
		toggleShowFilter,
		handlePriceRangeChange,
		handleSortChange,
	} = useFilter();

	return (
		<div>
			<FilterIcon
				className="ml-4 size-8 cursor-pointer"
				toggleShowFilter={toggleShowFilter}
			></FilterIcon>
			<div
				className={`left-0 absolute bg-amber-300 px-6 py-6 rounded-xl w-screen max-w-3xl md:left-1/2 md:-translate-x-1/2 ${showFilter ? "" : "hidden"}`}
			>
				<div>
					<h3 className="text-gray-800">Categories</h3>
					<ul className="flex flex-wrap gap-2 mt-3 list-none">
						{categoryOptions.map((e, i) => (
							<Checkbox id={e.id} key={i}></Checkbox>
						))}
					</ul>
				</div>
				<div>
					<h3 className="mt-5 text-gray-800">Price Range</h3>
					<ul className="flex flex-wrap gap-2 mt-3 list-none">
						{priceOptions.map((e, i) => (
							<Radio
								id={e.id}
								name={e.name}
								value={e.value}
								checker={priceRange}
								handleChange={handlePriceRangeChange}
								key={i}
							></Radio>
						))}
					</ul>
				</div>
				<div>
					<h3 className="mt-5 text-gray-800">Sort By</h3>
					<ul className="flex flex-wrap gap-2 mt-3 list-none">
						{sortOptions.map((e, i) => (
							<Radio
								id={e.id}
								name={e.name}
								value={e.value}
								checker={sort}
								handleChange={handleSortChange}
								key={i}
							></Radio>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
