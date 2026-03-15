import useFilter from "@/hooks/useFilter.ts";
import capitalizeFirstLetter from "@/utilities/CapitalizeFirstLetter.tsx";

export default function Radio({
	id,
	name,
	value,
}: {
	id: string;
	name: string;
	value: string;
}) {
	const { priceRange, handlePriceRangeChange } = useFilter();
	return (
		<li>
			<input
				type="radio"
				id={id}
				name={name}
				value={value}
				checked={priceRange === value}
				onChange={handlePriceRangeChange}
			/>
			<p className="inline ml-2">{capitalizeFirstLetter(id)}</p>
		</li>
	);
}
