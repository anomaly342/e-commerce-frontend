import { ToastContext } from "@/contexts/ToastProvider";
import { useContext } from "react";

export default function useToast() {
	const { toast, setToast } = useContext(ToastContext);

	const addToToast = (message: string) => {
		setToast((prev) => {
			return [...prev, { message: message }];
		});
	};

	return { toast, addToToast };
}
