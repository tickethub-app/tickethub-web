import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import EventDetails from './pages/EventDetails';
import { Provider as ToastProvider } from '@radix-ui/react-toast';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<ToastProvider swipeDirection="right">
					{/* <Home /> */}
					<EventDetails />
					<GlobalStyle />
				</ToastProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
