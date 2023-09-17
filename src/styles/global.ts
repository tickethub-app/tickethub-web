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

h1, h2 {
	font-size: 1.6rem;
	color: ${(props) => props.theme.colors.textTitle};
}

a {
	text-decoration: none;
	color: ${(props) => props.theme.colors.textBase};
	&:hover {
		color: ${(props) => props.theme.colors.textTitle};
	}
}

img {
	object-fit: cover;
	object-position: center;
}

.icon {
	/* color: red; */
}
`;
