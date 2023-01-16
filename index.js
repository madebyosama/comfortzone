// Importing the packages
const config = require('config');
const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_JbQYpS47bHjAnH6iyGfpTN6z00omKRfxgS');

if (!config.get('jwtPrivateKey')) {
	console.error('FATAL ERROR: jwtPrivateKey is not defined.');
	process.exit(1);
}

// Connection
mongoose.connect('mongodb://localhost/comfort-zone', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
let db = mongoose.connection;

// Checking connection
db.once('open', () => console.log('Connected to MongoDb'));

// Checking for DB errors
db.on('errors', err => console.log(err));

// Importing all routes
const ads = require('./routes/ads');
const complains = require('./routes/complains');
const funds = require('./routes/funds');
const issues = require('./routes/issues');
const bills = require('./routes/bills');
const users = require('./routes/users');
const auth = require('./routes/auth');
const pay = require('./routes/pay');

// Body Parser Middleware
app.use(express.json());
// app.use(express.urlencoded({ encoded: false }));
app.use(fileUpload());

// Setting a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Whitelisting IPs
app.use(cors());
var whitelist = ['http://localhost:3000'];

// Setting all routers
app.use('/api/ads', ads);
app.use('/api/complains', complains);
app.use('/api/funds', funds);
app.use('/api/issues', issues);
app.use('/api/bills', bills);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/pay', pay);

(async () => {
	const paymentIntent = await stripe.paymentIntents.create({
		amount: 1099,
		currency: 'usd',
		// Verify your integration in this guide by including this parameter
		metadata: { integration_check: 'accept_a_payment' }
	});
})();

// Upload Endpoint
app.post('/upload', (req, res) => {
	if (req.files === null) {
		return res.status(400).json({ msg: 'No file uploaded' });
	}

	let file = req.files.file;

	file.mv(
		`${__dirname}/client/public/uploads/${file.name.split(' ').join('')}`,
		err => {
			if (err) {
				console.error(err);
				return res.status(500).send(err);
			}

			res.json({
				fileName: file.name,
				filePath: `/uploads/${file.name.split(' ').join('')}`
			});
		}
	);
});

// Setting the PORT
const PORT = process.env.PORT || 5000;
// Listening to port
app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`));
