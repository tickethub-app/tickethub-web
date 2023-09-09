export function getShortMonth(date: Date): string {
	const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
	return month;
}
