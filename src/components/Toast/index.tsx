import { useContext } from 'react';
import * as RadixToast from '@radix-ui/react-toast';
import { useToast } from '../../contexts/toast';
import { ToastViewport, ToastRoot, ToastTitle } from './styles';

export default function Toast() {
	const { message, title, open, setOpen } = useToast();

	return (
		<>
			<ToastRoot open={open} onOpenChange={setOpen}>
				<ToastTitle>{title}</ToastTitle>
				<RadixToast.Description asChild>
					<p>{message}</p>
				</RadixToast.Description>
			</ToastRoot>
			<ToastViewport />
		</>
	);
}
