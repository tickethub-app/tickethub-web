import styled from 'styled-components';

export const ButtonStyles = styled.button<{ marginAuto?: boolean; marginTop?: number; marginLeft?: number }>`
	margin: ${({ marginAuto }) => (marginAuto ? 'auto' : 0)};
	padding: 1.2rem 2.4rem;
	border-radius: 0.8rem;
	font-weight: 700;
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.white};
	width: 90%;
	max-width: 28rem;
	display: flex;
	border: 0;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:hover {
		opacity: 0.85;
	}
`;
