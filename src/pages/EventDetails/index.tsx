import { ArrowLeft, Calendar, MapPin } from '@phosphor-icons/react';
import { Link, useLoaderData } from 'react-router-dom';
import { Header, MainContent, DetailsBox, DialogOverlay, DialogContent } from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import * as dayjs from 'dayjs';
import dataImg from '../../assets/data_wave.jpg';
import mozdevz_logo from '../../assets/mozdevz.png';
import Footer from '../../components/Footer';
import { FormEvent, useEffect, useState } from 'react';
import { getItem, postItem } from '../../services/api';
import { getFullDate } from '../../utils/dates';
import Button from '../../components/Button';
import { Form } from '../../components/Form/styles';
import { Input } from '../../components/Input/styles';
import Toast from '../../components/Toast';
import { useToast } from '../../contexts/toast';

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

export async function eventDetailsLoader({ params }: any) {
	return params;
}

export default function EventDetails() {
	const [event, setEvent] = useState<EventProps | null>();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [modalOpen, setModalOpen] = useState(false);

	const { eventId } = useLoaderData();
	const { showToast } = useToast();

	useEffect(() => {
		getItem(`/events/${eventId}`).then((response) => setEvent(response.data));
	}, []);

	async function handleSubmitRsvp(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			const ticket = await postItem('/tickets', {
				attendee_name: name,
				attendee_email: email,
				event_id: eventId
			});
			if (ticket) {
				showToast('RSVP', 'Successfully registered for the event.');
				setModalOpen(false);
			}
		} catch (error) {
			showToast('RSVP', 'Failed to register for the event.');
		}
	}
	return (
		<>
			<Header>
				<div>
					<Link to="/">
						<ArrowLeft size={24} className="icon" color="#FFF" />
					</Link>
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
					<Dialog.Root open={modalOpen} onOpenChange={setModalOpen}>
						<Dialog.Trigger asChild>
							<Button text="RSVP" marginAuto />
						</Dialog.Trigger>
						<Dialog.Portal>
							<DialogOverlay />
							<DialogContent>
								<h2>Attendee information</h2>
								<Form onSubmit={handleSubmitRsvp}>
									<fieldset>
										<Input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
										<Input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
									</fieldset>

									<Button text="RSVP" marginAuto type="submit" />
								</Form>
							</DialogContent>
						</Dialog.Portal>
					</Dialog.Root>
				</MainContent>
			)}

			{event && (
				<DetailsBox>
					<h2>Description</h2>
					<p>{event.description}</p>
				</DetailsBox>
			)}

			<Footer />
			<Toast />
		</>
	);
}
