import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

html {
	font-size: 75%;
	@media (min-width: 768px) {
		font-size: 62.5%;
	}
}
body {
	font-family: 'Roboto', sans-serif;
	background-color: ${(props) => props.theme.colors.background};
	color: ${(props) => props.theme.colors.textBase};
	font-size: 1.4rem;
}
`;
