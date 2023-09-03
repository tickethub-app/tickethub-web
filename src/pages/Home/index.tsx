import EventCard from '../../components/EventCard';
import Header from '../../components/Header';
import { MainContent } from './styles';

export default function Home() {
	return (
		<>
			<Header />
			<MainContent>
				<header>
					<h1>Upcoming events</h1> <a href="">See all</a>
				</header>
				<ul>
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
				</ul>
			</MainContent>

			<aside>
				<header>
					<h2>Find communities</h2>
					<a href="">See all</a>
				</header>
				<ul>
					<li>
						<img src="" alt="community" />
						<h3>Mozdevz</h3>
					</li>
				</ul>
			</aside>

			<footer>Copyright Ticket Hub. All rights reserved.</footer>
		</>
	);
}
