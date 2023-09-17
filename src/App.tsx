import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Login from './pages/Login';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import EventDetails from './pages/EventDetails';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				{/* <Home /> */}
				{/* <EventDetails />
				<GlobalStyle /> */}
				<Login />
			</ThemeProvider>
		</>
	);
}

export default App;
