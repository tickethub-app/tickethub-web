import styled, { keyframes } from 'styled-components';
import { BaseContainer } from '../../components/BaseContainer';
import { LinkButton } from '../../components/Header/styles';
import { Overlay, Content, Trigger } from '@radix-ui/react-dialog';
import { ButtonStyles } from '../../components/Button/styles';
import Button from '../../components/Button';

export const Header = styled(BaseContainer).attrs({ as: 'header' })`
	padding: 0;
	position: relative;
	div {
		position: absolute;
		padding: 2.4rem;
		color: ${(props) => props.theme.colors.white};
		display: flex;
		align-items: center;
		width: 100%;

		a {
			width: 4.8rem;
			&:hover {
				.icon {
					opacity: 0.7;
				}
			}
		}

		h2 {
			color: ${(props) => props.theme.colors.white};
			font-size: 2.4rem;
			font-weight: 500;
			width: calc(100% - 4.8rem);
			text-align: center;
			padding: 0 auto;
		}
	}
	img {
		height: 26rem;
		width: 100%;
	}
`;

export const MainContent = styled(BaseContainer).attrs({ as: 'main' })`
	padding-top: 1.2rem;

	h1 {
		font-size: 2.4rem;
		font-weight: 500;
		margin-bottom: 1.6rem;
	}

	> div {
		margin-bottom: 4.8rem;
		@media (min-width: 768px) {
			display: flex;
			justify-content: space-between;
		}
	}

	section {
		height: 4.8rem;
		display: flex;
		div {
			margin-left: 1.2rem;
			strong {
				font-weight: 500;
				color: ${(props) => props.theme.colors.textTitle};
				display: block;
				margin-bottom: 0.4rem;
			}
		}

		.icon {
			width: 4.8rem;
			height: 4.8rem;
			padding: 0.8rem;
			border-radius: 0.8rem;
			background-color: ${(props) => props.theme.colors.secondary}1A;
			color: ${(props) => props.theme.colors.secondary};
		}
		img {
			height: 100%;
			width: 4.8rem;
			border-radius: 0.8rem;
		}

		& + section {
			margin-top: 1.2rem;
			@media (min-width: 768px) {
				margin-top: 0;
			}
		}
	}
`;

export const RegisterButton = styled.button`
	display: block;
	margin: 4.8rem auto 0;
	text-align: center;
	max-width: 28rem;
`;

export const DetailsBox = styled(BaseContainer).attrs({ as: 'aside' })`
	padding-top: 4.8rem;
	padding-bottom: 4.8rem;
	h2 {
		margin-bottom: 1.6rem;
	}
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const contentShow = keyframes`
  0% {
		opacity: 0;
		transform: translate(-50%, -48%) scale(.96);
	}
  100% {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
	}
`;

export const DialogOverlay = styled(Overlay)`
	background-color: ${(props) => props.theme.colors.transparent};
	position: fixed;
	inset: 0;
	animation: ${fadeIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DialogContent = styled(Content)`
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 0.8rem;
	box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90vw;
	max-width: 45rem;
	max-height: 85vh;
	padding: 2.4rem;
	animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

	&:focus {
		outline: none;
	}
`;
