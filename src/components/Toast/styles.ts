import styled, { keyframes } from 'styled-components';
import * as Toast from '@radix-ui/react-toast';

export const ToastViewport = styled(Toast.Viewport)`
	position: fixed;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	padding: 2.4rem;
	gap: 10;
	width: 390;
	max-width: 90vw;
	margin: 0;
	list-style: none;
	z-index: 2147483647;
	outline: none;
`;

export const hide = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const slideIn = keyframes`
  from { transform: translateX(calc(100% + 2.4rem)); }
  to { transform: translateX(0) }
`;

const swipeOut = keyframes`
  from { transform: translateX(var(--radix-toast-swipe-end-x)); }
  to { transform: translateX(calc(100% + 2.4rem)) }
`;

export const ToastRoot = styled(Toast.Root)`
	background-color: ${(props) => props.theme.colors.boxFill};
	border-radius: 0.8rem;
	box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
	padding: 1.6rem;
	display: grid;

	&[data-state='open'] {
		animation: ${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	&[data-state='closed'] {
		animation: ${hide} 100ms ease-in;
	}

	&[data-swipe='move'] {
		transform: translateX(var(--radix-toast-swipe-move-x));
	}

	&[data-swipe='cancel'] {
		transform: translateX(0);
		transition: transform 200ms ease-out;
	}

	&[data-swipe='end'] {
		animation: ${swipeOut} 100ms ease-out;
	}
`;

export const ToastTitle = styled(Toast.Title)`
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.textTitle};
  font-size: 1.5rem;
`;
