import styled from 'styled-components';
import { Form as FormBase } from '../../components/Form/styles';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const Form = styled(FormBase)`
	width: 92%;
	max-width: 45rem;
	border-radius: 0.8rem;
	padding: 2.4rem;
	background: ${(props) => props.theme.colors.boxFill};
	h1 {
		margin-bottom: 2.4rem;
	}

	a {
		margin-top: 2.4rem;
		display: block;
	}
`;
