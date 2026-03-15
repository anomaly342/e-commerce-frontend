import ArrowIcon from "@/app/components/ArrowIcon.tsx";
import CartItem from "@/app/components/CartItem.tsx";
import useCart from "@/app/hooks/useCart.ts";

export default function Cart({
	toggleShowCart,
	showCart,
}: {
	toggleShowCart: () => void;
	showCart: boolean;
}) {
	const { cart, totalPrice, increase, decrease } = useCart();
	return (
		<div
			className={`z-40 top-0 right-0 flex flex-col fixed bg-white w-screen max-w-130 h-screen ${showCart ? "" : "hidden"}`}
		>
			<header className="flex items-center mb-5 px-4 py-5">
				<ArrowIcon
					toggleShowCart={toggleShowCart}
					className="mr-4 cursor-pointer"
				></ArrowIcon>
				<h2 className="text-sky-600">View Cart</h2>
			</header>
			<ul className="overflow-auto">
				{cart.map((e) => (
					<CartItem
						key={e.id}
						id={e.id}
						title={e.title}
						quantity={e.quantity}
						price={e.price}
						image={e.image}
						category={e.category}
						increase={increase}
						decrease={decrease}
					></CartItem>
				))}
			</ul>
			<footer className="mt-auto">
				<div className="px-4 py-6">
					<div className="flex justify-between items-center bg-sky-200 px-4 py-4 rounded-xl">
						<h3>Total Price</h3>
						<p>{totalPrice.toFixed(2)}</p>
					</div>
					<button className="block content-center bg-blue-500 mt-4 mr-auto ml-auto px-4 py-3 border-none rounded-md font-bold text-white text-lg">
						Check out
					</button>
				</div>
			</footer>
		</div>
	);
}
