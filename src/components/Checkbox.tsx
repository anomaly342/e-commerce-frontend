import useFilter from "@/hooks/useFilter.ts";
import { Category } from "@/types/types.ts";
import capitalizeFirstLetter from "@/utilities/CapitalizeFirstLetter.tsx";

export default function Checkbox({ id }: { id: Category }) {
	const { categories, handleCategoryChange } = useFilter();
	return (
		<li className="flex items-center">
			<input
				type="checkbox"
				id={id}
				name={id}
				checked={categories[id]}
				onChange={() => handleCategoryChange(id)}
			/>
			<p className="inline ml-2">{capitalizeFirstLetter(id)}</p>
		</li>
	);
}
