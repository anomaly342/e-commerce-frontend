import { PriceRange, SortOption } from "@/types/types.ts";
import capitalizeFirstLetter from "@/utilities/CapitalizeFirstLetter.ts";

export default function Radio<T extends PriceRange | SortOption>({
	id,
	name,
	value,
	checker,
	handleChange,
}: {
	id: string;
	name: string;
	value: T;
	checker: T;
	handleChange: (value: T) => void;
}) {
	return (
		<li>
			<input
				type="radio"
				id={id}
				name={name}
				value={value}
				checked={checker === value}
				onChange={() => handleChange(value)}
			/>
			<p className="inline ml-2">{capitalizeFirstLetter(id)}</p>
		</li>
	);
}
