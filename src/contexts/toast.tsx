import { createContext, useContext, SetStateAction, useState, Dispatch } from 'react';
import { Provider as RadixToastProvider } from '@radix-ui/react-toast';

interface ToastContextData {
	title: string;
	message: string;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	showToast(title: string, message: string): void;
}

const ToastContext = createContext<ToastContextData | {}>({});

export function ToastProvider({ children }) {
	const [title, setTitle] = useState('');
	const [message, setMessage] = useState('');
	const [open, setOpen] = useState(false);

	function showToast(title: string, message: string) {
		setOpen(false);
		setTitle(title);
		setMessage(message);
		setOpen(true);
	}

	return (
		<RadixToastProvider swipeDirection="right" duration={3000}>
			<ToastContext.Provider value={{ message, title, open, setOpen, showToast }}>{children}</ToastContext.Provider>
		</RadixToastProvider>
	);
}

export function useToast(): ToastContextData {
	const context = useContext(ToastContext);

	return context;
}

export default ToastContext;
