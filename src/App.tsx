import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import EventDetails from './pages/EventDetails';
import { ToastProvider } from './contexts/toast';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<ToastProvider>
					{/* <Home /> */}
					<EventDetails />
					<GlobalStyle />
				</ToastProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
