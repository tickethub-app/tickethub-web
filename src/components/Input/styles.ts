import styled from 'styled-components';

export const Input = styled.input`
	display: block;
	padding: 1.2rem 2.4rem;
	width: 100%;
	font-weight: 500;
	border: 1px solid ${(props) => props.theme.colors.inputBorder};
	color: ${(props) => props.theme.colors.inputText};

	+ input {
		margin-top: 1.6rem;
	}
`;
