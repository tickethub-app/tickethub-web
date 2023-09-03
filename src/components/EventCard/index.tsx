import { Container, Image } from './styles';
import dataImg from '../../assets/data_wave.jpg';

export default function EventCard() {
	return (
		<Container>
			<a href="">
				<Image>
					<img src={dataImg} alt="event image" style={{ width: '100%' }} />
					<figcaption>
						<strong>15</strong> <small>July</small>
					</figcaption>
				</Image>
				<footer>
					<h3>Data Wave</h3>
					<span>100 tickets left</span>
					<small>FENG UEM</small>
				</footer>
			</a>
		</Container>
	);
}
