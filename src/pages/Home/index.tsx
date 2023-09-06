import { useState, useEffect } from 'react';
import { getItems } from '../../api';
import CommunityCard, { CommunityProps } from '../../components/CommunityCard';
import EventCard from '../../components/EventCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MainContent, CommunitiesList } from './styles';

export default function Home() {
	const [organizations, setOrganizations] = useState<CommunityProps[]>([]);

	useEffect(() => {
		getItems('/organisations').then((response) => setOrganizations(response.data));
	}, []);

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
					{organizations &&
						organizations.map((org) => {
							return <CommunityCard key={org.id} id={org.id} name={org.name} email={org.email} />;
						})}
				</ul>
			</CommunitiesList>

			<Footer />
		</>
	);
}
