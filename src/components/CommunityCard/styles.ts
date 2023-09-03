import styled from 'styled-components';

export const Container = styled.li`
	height: 16rem;
	border-radius: 0.8rem;
	overflow: hidden;

	&:hover {
		box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.4);
	}

	figure {
		position: relative;
		img {
			border-radius: 0.8rem;
			width: 100%;
			height: 16rem;
			object-fit: cover;
			object-position: center;
		}

		figcaption {
			position: absolute;
			display: flex;
			align-items: flex-end;
			bottom: 0;
			height: 50%;
			width: 100%;
			padding: 1.2rem;
			background: linear-gradient(to top, #00000090, #00000050 50%, #00000000);
			h3 {
				color: ${(props) => props.theme.colors.white};
				font-size: 1.6rem;
			}
		}
	}
`;
