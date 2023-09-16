import logoBlue from '../../assets/logo_blue.svg';
import { Container } from './styles';
import { LinkButton } from './styles';

export default function Header() {
	return (
		<Container>
			<header><img src="" alt="" /></header>
			<img src={logoBlue} alt="logo" /> <LinkButton href="">Get started</LinkButton>
		</Container>
	);
}
