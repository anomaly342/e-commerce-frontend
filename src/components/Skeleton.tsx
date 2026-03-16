export default function Skeleton() {
	return (
		<div className="flex flex-col shadow-md hover:shadow-sky-400 mt-8 px-4 py-4 rounded-md w-full h-96 animate-pulse">
			<div className="bg-gray-200 w-full h-7/12"></div>

			<div className="flex flex-col flex-1 mt-3">
				<div className="bg-gray-200 mb-2 w-full h-3"></div>
				<div className="bg-gray-200 w-full h-3"></div>
				<div className="flex justify-between items-center mt-auto">
					<div className="bg-gray-200 w-14 h-7"></div>
				</div>
			</div>
		</div>
	);
}
