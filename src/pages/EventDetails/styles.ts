import styled from 'styled-components';
import { BaseContainer } from '../../components/BaseContainer';
import { LinkButton } from '../../components/Header/styles';

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

export const RegisterButton = styled(LinkButton)`
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
