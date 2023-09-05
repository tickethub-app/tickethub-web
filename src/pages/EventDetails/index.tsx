import { ArrowLeft, Calendar, MapPin } from '@phosphor-icons/react';
import { Header, MainContent, RegisterButton, DetailsBox } from './styles';
import dataImg from '../../assets/data_wave.jpg';
import mozdevz_logo from '../../assets/mozdevz.png';
import Footer from '../../components/Footer';

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

			<MainContent>
				<h1>Data wave</h1>

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
							<strong>9 July, 2023</strong>
							<small>Saturday, 8AM-3PM</small>
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

			<DetailsBox>
				<h2>Description</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis, temporibus assumenda id
					numquam at sit nobis, illum veniam eius odit, porro atque officia provident incidunt accusamus! Doloremque,
					expedita sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere! Alias tenetur incidunt
					necessitatibus. Quisquam, laboriosam odio? Voluptatibus dolorem delectus aspernatur aperiam rerum? Dolorem,
					corrupti modi distinctio facere fuga quisquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Asperiores itaque incidunt ea enim earum necessitatibus ab dolor id, accusamus tempora, commodi dicta deleniti
					eum at quod voluptas saepe! Eligendi, cupiditate?
				</p>
			</DetailsBox>

			<Footer />
		</>
	);
}
