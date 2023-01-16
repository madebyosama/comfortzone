export const category = [
	{ name: 'Education', _id: 'Education' },
	{ name: 'Medical', _id: 'Medical' },
	{ name: 'Personal', _id: 'Personal' },
	{ name: 'Memorial', _id: 'Memorial' }
];

export function getCategory() {
	return category.filter(c => c);
}
