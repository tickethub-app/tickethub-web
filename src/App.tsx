import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import EventDetails from './pages/EventDetails';
import { ToastProvider } from './contexts/toast';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<ToastProvider>
					<RouterProvider router={router} />
					<GlobalStyle />
				</ToastProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
