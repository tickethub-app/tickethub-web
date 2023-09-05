import styled from 'styled-components';
import { BaseContainer } from '../../components/BaseContainer';

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
