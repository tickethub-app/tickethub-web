import { ArrowLeft, Calendar, MapPin } from '@phosphor-icons/react';
import { Header, MainContent, RegisterButton, DetailsBox } from './styles';
import * as dayjs from 'dayjs';
import dataImg from '../../assets/data_wave.jpg';
import mozdevz_logo from '../../assets/mozdevz.png';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { getItem } from '../../services/api';
import { getFullDate } from '../../utils/dates';

interface EventProps {
	id: string;
	number_tickets: number;
	date: Date;
	topic: string;
	image: string;
	organisation_id: string;
	description: string;
	start_time: string;
	end_time: string;
}

export default function EventDetails() {
	const [event, setEvent] = useState<EventProps | null>();

	useEffect(() => {
		getItem('/events/5eeb03bf-bb19-4b82-8686-7be55a9d5f87').then((response) => setEvent(response.data));
	}, []);
	return (
		<>
			<Header>
				<div>
					<a href="">
						<ArrowLeft size={24} className="icon" color="#FFF" />
					</a>
					<h2>Event details</h2>
				</div>
				<img src={dataImg} alt="" />
			</Header>

			{event && (
				<MainContent>
					<h1>{event.topic}</h1>

					<div>
						<section>
							<img src={mozdevz_logo} alt="" />
							<div>
								<strong>Mozdevz</strong>
								<small>Organizer</small>
							</div>
						</section>

						<section>
							<Calendar weight="fill" className="icon" />
							<div>
								<strong>{getFullDate(new Date(event.date))}</strong>
								<small>
									{dayjs(event.date).format('dddd')}, {event.start_time.slice(0, 5)}-{event.end_time.slice(0, 5)}
								</small>
							</div>
						</section>

						<section>
							<MapPin weight="fill" className="icon" />
							<div>
								<strong>Feng UEM</strong>
								<small>FENG UEM</small>
							</div>
						</section>
					</div>
					<RegisterButton href="">RSVP</RegisterButton>
				</MainContent>
			)}

			{event && (
				<DetailsBox>
					<h2>Description</h2>
					<p>{event.description}</p>
				</DetailsBox>
			)}

			<Footer />
		</>
	);
}
