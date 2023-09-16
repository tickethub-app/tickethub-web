import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import EventDetails, { eventDetailsLoader } from './pages/EventDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/events/:eventId',
		element: <EventDetails />,
		loader: eventDetailsLoader
	}
]);

export default router;
