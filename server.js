const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

const transactions = require('./routes/transactions');

const app = express();

// Whenever we make a request to './api/v1/transactions', it will send us to './routes/transaction.js'
app.use('./api/v1/transactions', transactions);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`));