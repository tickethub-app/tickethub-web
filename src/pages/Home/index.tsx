import { useState, useEffect } from 'react';
import { getItems } from '../../services/api';
import CommunityCard, { CommunityProps } from '../../components/CommunityCard';
import EventCard, { EventProps } from '../../components/EventCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MainContent, CommunitiesList } from './styles';

export default function Home() {
	const [organizations, setOrganizations] = useState<CommunityProps[]>([]);
	const [events, setEvents] = useState<EventProps[]>([]);

	useEffect(() => {
		getItems('/events').then((response) => setEvents(response.data));
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
					{events.map((event) => (
						<EventCard
							key={event.id}
							id={event.id}
							topic={event.topic}
							date={event.date}
							number_tickets={event.number_tickets}
							image={event.image}
							organisation_id={event.organisation_id}
						/>
					))}
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
