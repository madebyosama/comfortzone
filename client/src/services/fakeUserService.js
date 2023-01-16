import * as genresAPI from './fakeGenreService';

const movies = [
	{
		_id: '5b21ca3eeb7f6fbccd471815',
		title: 'Rana Waqar',
		genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'Worker' },
		numberInStock: 923000000000,
		dailyRentalRate: 2,
		publishDate: '2018-01-03T19:04:28.809Z',
		liked: true
	},
	{
		_id: '5b21ca3eeb7f6fbccd471816',
		title: 'Haris Mehmood',
		genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Society Member' },
		numberInStock: 923000000000,
		dailyRentalRate: 2
	},
	{
		_id: '5b21ca3eeb7f6fbccd471817',
		title: 'Arslan Kaleem',
		genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Society Member' },
		numberInStock: 923000000000,
		dailyRentalRate: 3
	},
	{
		_id: '5b21ca3eeb7f6fbccd471819',
		title: 'Haider Ali',
		genre: { _id: '5b21ca3eeb7f6fbccd471821', name: 'Truck Driver' },
		numberInStock: 923000000000,
		dailyRentalRate: 3
	},
	{
		_id: '5b21ca3eeb7f6fbccd47181a',
		title: 'Muhammad Osama',
		genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Admin' },
		numberInStock: 923000000000,
		dailyRentalRate: 3
	},
	{
		_id: '5b21ca3eeb7f6fbccd47181b',
		title: 'Usman Maqsood',
		genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Society Member' },
		numberInStock: 923000000000,
		dailyRentalRate: 3
	},
	{
		_id: '5b21ca3eeb7f6fbccd47181e',
		title: 'Imran Gul',
		genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Society Member' },
		numberInStock: 923000000000,
		dailyRentalRate: 4
	},
	{
		_id: '5b21ca3eeb7f6fbccd47181f',
		title: 'Israr ul Haq',
		genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Society Member' },
		numberInStock: 923000000000,
		dailyRentalRate: 3
	},
	{
		_id: '5b21ca3eeb7f6fbccd471821',
		title: 'Muhammad Ali',
		genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Society Member' },
		numberInStock: 923000000000,
		dailyRentalRate: 3
	}
];

export function getUsers() {
	return movies;
}

export function getUser(id) {
	return movies.find(m => m._id === id);
}

export function saveUser(movie) {
	let movieInDb = movies.find(m => m._id === movie._id) || {};
	movieInDb.title = movie.title;
	movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
	movieInDb.numberInStock = movie.numberInStock;
	movieInDb.dailyRentalRate = movie.dailyRentalRate;

	if (!movieInDb._id) {
		movieInDb._id = Date.now().toString();
		movies.push(movieInDb);
	}

	return movieInDb;
}

export function deleteUser(id) {
	let movieInDb = movies.find(m => m._id === id);
	movies.splice(movies.indexOf(movieInDb), 1);
	return movieInDb;
}
