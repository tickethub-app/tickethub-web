import styled from 'styled-components';

export const BaseContainer = styled.div`
	width: 92%;
	max-width: 97.8rem;
	margin: auto;
	padding: 0 2.4rem;
	background: ${(props) => props.theme.colors.boxFill};
`;

export const MainContent = styled(BaseContainer).attrs({ as: 'main' })`
	header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		a {
			font-size: 1.6rem;
			&:hover {
				color: ${(props) => props.theme.colors.primary};
			}
		}
	}

	ul {
		margin-top: 1.6rem;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2.4rem;
	}
`;

export const CommunitiesList = styled(BaseContainer).attrs({ as: 'aside' })`
	padding-top: 3.2rem;
	padding-bottom: 4.8rem;

	header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		a {
			font-size: 1.6rem;
			&:hover {
				color: ${(props) => props.theme.colors.primary};
			}
		}
	}

	ul {
		margin-top: 1.6rem;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2.4rem;
	}
`;
