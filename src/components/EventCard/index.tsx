import { Link } from 'react-router-dom';
import { Container, Image } from './styles';
import dataImg from '../../assets/data_wave.jpg';
import { getShortMonth } from '../../utils/dates';

export interface EventCardProps {
	id: string;
	number_tickets: number;
	date: Date;
	topic: string;
	image: string;
	organisation_id: string;
}

export default function EventCard({ id, date, image, number_tickets, organisation_id, topic }: EventCardProps) {
	const parsedDate = new Date(date);
	return (
		<Container>
			<Link to={'events/' + id}>
				<Image>
					<img src={dataImg} alt="event image" style={{ width: '100%' }} />
					<figcaption>
						<strong>{parsedDate.getUTCDate()}</strong> <small>{getShortMonth(parsedDate)}</small>
					</figcaption>
				</Image>
				<footer>
					<h3>{topic}</h3>
					<span>{number_tickets} tickets</span>
					<small>FENG UEM</small>
				</footer>
			</Link>
		</Container>
	);
}
