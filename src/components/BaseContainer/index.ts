import styled from 'styled-components';

export const BaseContainer = styled.div`
	width: 92%;
	max-width: 97.8rem;
	margin: auto;
	padding: 0 2.4rem;
	background: ${(props) => props.theme.colors.boxFill};
`;
