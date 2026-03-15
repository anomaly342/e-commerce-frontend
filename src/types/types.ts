export type Category =
	| "men's clothing"
	| "jewelery"
	| "electronics"
	| "women's clothing";

export interface Product {
	id: number;
	title: string;
	price: number;
	category: Category;
	image: string;
}

export interface CartUnit extends Product {
	quantity: number;
}

export interface CartContextType {
	cart: CartUnit[];
	showCart: boolean;
	setCart: React.Dispatch<React.SetStateAction<CartUnit[]>>;
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FilterContextType {
	keyword: string;
	categories: Category[];
	minPrice: number;
	maxPrice: number;
	setKeyword: React.Dispatch<React.SetStateAction<string>>;
	setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
	setMinPrice: React.Dispatch<React.SetStateAction<number>>;
	setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
}
