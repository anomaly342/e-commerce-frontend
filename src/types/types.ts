export type Category =
	| "men's clothing"
	| "jewelery"
	| "electronics"
	| "women's clothing";

export type PriceRange = "none" | "a" | "b" | "c";
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
	totalPrice: number;
	totalQuantity: number;
	setCart: React.Dispatch<React.SetStateAction<CartUnit[]>>;
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FilterContextType {
	keyword: string;
	categories: { [key in Category]: boolean };
	priceRange: PriceRange;
	setKeyword: React.Dispatch<React.SetStateAction<string>>;
	setCategories: React.Dispatch<
		React.SetStateAction<{ [key in Category]: boolean }>
	>;
	setPriceRange: React.Dispatch<React.SetStateAction<PriceRange>>;
}

export interface Toast {
	message: string;
}
[];

export interface ToastContextType {
	toast: Toast[];
	setToast: React.Dispatch<React.SetStateAction<Toast[]>>;
}
