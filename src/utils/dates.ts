export function getShortMonth(date: Date): string {
	const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
	return month;
}

export function getFullDate(date: Date): string {
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	const dateString = date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	return dateString;
}
