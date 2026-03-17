import { Toast, ToastContextType } from "@/types/types.ts";
import { createContext, useEffect, useState } from "react";

export const ToastContext = createContext<ToastContextType>(
	{} as ToastContextType,
);

export function ToastProvider({ children }: { children: React.ReactNode }) {
	const [toast, setToast] = useState<Toast[]>([]);

	useEffect(() => {
		const timer = setInterval(() => {
			if (toast.length > 0) setToast((prev) => prev.slice(1));
		}, 8000);

		return () => clearInterval(timer);
	}, [toast]);

	return (
		<ToastContext.Provider value={{ toast, setToast }}>
			{children}
		</ToastContext.Provider>
	);
}
