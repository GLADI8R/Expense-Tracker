const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });
connectDB();

const transactions = require('./routes/transactions');

const app = express();
app.use(express.json());

if(process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Whenever we make a request to './api/v1/transactions', it will send us to './routes/transaction.js'
app.use('/api/v1/transactions', transactions);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`));