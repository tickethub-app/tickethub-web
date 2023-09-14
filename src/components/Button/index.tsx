import { ComponentProps } from 'react';
import { ButtonStyles } from './styles';

interface ButtonProps extends ComponentProps<'button'> {
	text: string;
	marginAuto?: boolean;
}

export default function Button({ text, marginAuto, ...props }: ButtonProps) {
	return (
		<ButtonStyles marginAuto={marginAuto} {...props}>
			{text}
		</ButtonStyles>
	);
}
