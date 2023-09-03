import styled from 'styled-components';

export const Container = styled.header`
	width: 92%;
	max-width: 97.8rem;
	border: 1px solid red;
	margin: auto;
	padding: 2.4rem;
	background: ${(props) => props.theme.colors.boxFill};
	display: flex;
	align-items: center;
	justify-content: space-between;
	img {
		height: 2.4rem;
	}
`;

export const LinkButton = styled.a`
	padding: 1.6rem 2.4rem;
	text-decoration: none;
`;
