import styled from 'styled-components';

export const Container = styled.footer`
	background-color: ${(props) => props.theme.colors.secondary};
	padding: 2.4rem;
	color: ${(props) => props.theme.colors.white};
	display: flex;
	justify-content: center;
`;
