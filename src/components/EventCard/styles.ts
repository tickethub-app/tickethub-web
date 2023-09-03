import styled from 'styled-components';

export const Container = styled.li`
	box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.15);
	overflow: hidden;
	border-radius: 0.8rem;
	&:hover {
		box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.4);
	}

	footer {
		padding: 0.8rem 1.2rem;

		h3 {
			color: ${(props) => props.theme.colors.textTitle};
			font-size: 1.4rem;
		}

		span {
			color: ${(props) => props.theme.colors.secondary};
			font-weight: 500;
		}

		small {
			display: block;
			margin-top: 0.6rem;
		}
	}
`;

export const Image = styled.figure`
	position: relative;

	img {
		height: 16rem;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}

	figcaption {
		position: absolute;
		top: 1.2rem;
		left: 1.2rem;
		background: ${(props) => props.theme.colors.boxFill};
		opacity: 0.7;
		padding: 0.6rem;
		border-radius: 0.4rem;
		width: 4.8rem;
		height: 4.8rem;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		color: ${(props) => props.theme.colors.primary};

		strong {
			font-size: 1.8rem;
		}

		small {
			font-size: 1rem;
			text-transform: uppercase;
		}
	}
`;
