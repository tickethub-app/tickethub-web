import styled from 'styled-components';

export const Container = styled.header`
	width: 92%;
	max-width: 97.8rem;
	margin: auto;
	padding: 2.4rem;
	background: ${(props) => props.theme.colors.boxFill};
	display: flex;
	align-items: center;
	justify-content: space-between;
	img {
		height: 100%;
	}
`;

export const LinkButton = styled.a`
	padding: 1.2rem 2.4rem;
	border-radius: 0.4rem;
	font-weight: 700;
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.white};

	&:hover {
		opacity: 0.85;
	}
`;
