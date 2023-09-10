import axios from 'redaxios';

export const api = axios.create({
	baseURL: 'http://localhost:5000/api/v1'
});

export function getItems(url: string): Promise<any> {
	const response = api
		.get(url)
		.then((response) => response.data)
		.catch((error) => ({ data: [] }));

	return response;
}

export function getItem(url: string): Promise<any> {
	const response = api
		.get(url)
		.then((response) => response.data)
		.catch((error) => ({ data: {} }));

	return response;
}
