import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			greenDark: string;
			green: string;
			greenLight: string;
			blue: string;
			warning: string;
			redError: string;
			background: string;
			grayElements: string;
			grayBars: string;
			grayStroke: string;
			textTitle: string;
			textBase: string;
			textAux: string;
			white: string;
		};
	}
}
