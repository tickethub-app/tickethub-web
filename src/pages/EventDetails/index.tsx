import { Header } from './styles';
import dataImg from '../../assets/data_wave.jpg';
import { ArrowLeft } from '@phosphor-icons/react';

export default function EventDetails() {
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

			<main>
				<h1>Data wave</h1>

				<section>
					<img src="" alt="" />
					<div>
						<strong>Mozdevz</strong>
						<small>Organizer</small>
					</div>
				</section>

				<section>
					<img src="" alt="" />
					<div>
						<strong>9 July, 2023</strong>
						<small>Saturday, 8AM-3PM</small>
					</div>
				</section>

				<section>
					<img src="" alt="" />
					<div>
						<strong>Feng UEM</strong>
						<small>FENG UEM</small>
					</div>
				</section>

				<a href="">RSVP</a>
			</main>

			<aside>
				<h2>Description</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis, temporibus assumenda id
					numquam at sit nobis, illum veniam eius odit, porro atque officia provident incidunt accusamus! Doloremque,
					expedita sed.
				</p>
			</aside>
		</>
	);
}
