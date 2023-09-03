import mozdevz_logo from '../../assets/mozdevz.png';
import { Container } from './styles';

export default function CommunityCard() {
	return (
		<Container>
			<a href="">
				<figure>
					<img src={mozdevz_logo} alt="community" />
					<figcaption>
						<h3>Mozdevz</h3>
					</figcaption>
				</figure>
			</a>
		</Container>
	);
}
