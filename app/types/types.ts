export interface Product {
	id: number;
	title: string;
	price: number;
	category: "men's clothing" | "jewelery" | "electronics" | "women's clothing";
	image: string;
}

export interface CartUnit extends Product {
	quantity: number;
}

export interface CartContextType {
	cart: CartUnit[];
	setCart: React.Dispatch<React.SetStateAction<CartUnit[]>>;
	showCart: boolean;
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}
