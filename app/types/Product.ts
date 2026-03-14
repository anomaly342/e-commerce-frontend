export interface Product {
	id: number;
	title: string;
	price: number;
	category: "men's clothing" | "jewelery" | "electronics" | "women's clothing";
	image: string;
}
