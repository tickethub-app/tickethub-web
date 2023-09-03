import styled from 'styled-components';

export const BaseContainer = styled.div`
	width: 92%;
	max-width: 97.8rem;
	margin: auto;
	padding: 0 24px;
	background: ${(props) => props.theme.colors.boxFill};
`;

export const MainContent = styled(BaseContainer).attrs({ as: 'main' })`
	header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		a {
			font-size: 1.6rem;
		}
	}
`;
