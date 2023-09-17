import Button from '../../components/Button';
import { FormEvent, useState } from 'react';
import { Container, Form } from './styles';
import { Input } from '../../components/Input/styles';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<h1>Login as organization</h1>
				<fieldset>
					<Input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="example@test.domain"
						id="email"
						name="email"
					/>
					<Input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="your password here"
						id="password"
						name="password"
					/>
				</fieldset>
				<Button text="Login" marginAuto />
				<a href="">Don't Have an account? Register here.</a>
			</Form>
		</Container>
	);
}
