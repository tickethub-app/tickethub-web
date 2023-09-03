import logoBlue from '../../assets/logo_blue.svg';
import { Container } from './styles';
import { LinkButton } from './styles';

export default function Header() {
	return (
		<Container>
			<img src={logoBlue} alt="logo" /> <a href="">Get started</a>
		</Container>
	);
}
