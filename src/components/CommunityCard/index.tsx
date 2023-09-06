import mozdevz_logo from '../../assets/mozdevz.png';
import { Container } from './styles';

export interface CommunityProps {
	id: string;
	name: string;
	email: string;
}

export default function CommunityCard({ id, name, email }: CommunityProps) {
	return (
		<Container>
			<a href="">
				<figure>
					<img src={`https://ui-avatars.com/api/?name=${name.replace(' ', '+')}`} alt={name} />
					<figcaption>
						<h3>{name}</h3>
					</figcaption>
				</figure>
			</a>
		</Container>
	);
}
