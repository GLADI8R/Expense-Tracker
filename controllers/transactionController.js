// Methods to interact with the DB

// 			GET all transactions
//@route		GET /api/v1/transactions
exports.getTransactions = (req, res, next) => {
	res.send('GET Transactions');
}

// 			ADD transaction
//@route		POST /api/v1/transactions
exports.addTransaction = (req, res, next) => {
	res.send('POST Transaction');
}

// 			Delete transaction
//@route		DELETE /api/v1/transactions/:id
exports.deleteTransaction = (req, res, next) => {
	res.send('DELETE Transaction');
}