import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			textTitle: string;
			textBase: string;
			inputBorder: string;
			inputText: string;
			background: string;
			boxFill: string;
			white: string;
			black: string;
			transparent: string;
		};
	}
}
