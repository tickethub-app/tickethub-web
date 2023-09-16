import * as RadixToast from '@radix-ui/react-toast';
import { ToastViewport, ToastRoot, ToastTitle } from './styles';

export default function Toast() {
	return (
		<>
			<ToastRoot open={true}>
				<ToastTitle>Title</ToastTitle>
				<RadixToast.Description asChild>
					<p>Description</p>
				</RadixToast.Description>
			</ToastRoot>
			<ToastViewport />
		</>
	);
}
