import CommunityCard from '../../components/CommunityCard';
import EventCard from '../../components/EventCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MainContent, CommunitiesList } from './styles';

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
				</ul>
			</MainContent>

			<CommunitiesList>
				<header>
					<h2>Find communities</h2>
					<a href="">See all</a>
				</header>
				<ul>
					<CommunityCard />
					<CommunityCard />
					<CommunityCard />
					<CommunityCard />
					<CommunityCard />
					<CommunityCard />
					<CommunityCard />
					<CommunityCard />
					<CommunityCard />
					<CommunityCard />
					<CommunityCard />
				</ul>
			</CommunitiesList>

			<Footer />
		</>
	);
}
