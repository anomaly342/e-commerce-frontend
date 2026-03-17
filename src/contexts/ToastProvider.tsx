import { Toast, ToastContextType } from "@/types/types.ts";
import { createContext, useEffect, useState } from "react";

export const ToastContext = createContext<ToastContextType>(
	{} as ToastContextType,
);

export function ToastProvider({ children }: { children: React.ReactNode }) {
	const [toast, setToast] = useState<Toast[]>([]);

	useEffect(() => {
		const timer = setInterval(() => {
			setToast((prev) => {
				if (prev.length > 0) {
					return prev.slice(1);
				} else {
					return prev;
				}
			});
		}, 8000);

		return () => clearInterval(timer);
	}, []);

	return (
		<ToastContext.Provider value={{ toast, setToast }}>
			{children}
		</ToastContext.Provider>
	);
}
