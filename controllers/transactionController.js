// Methods to interact with the DB

const Transaction = require('../models/Transaction');

// 			GET all transactions
//@route		GET /api/v1/transactions
exports.getTransactions = async(req, res, next) => {
	try {
		const transactions = await Transaction.find();

		return res.status(200).json({
			success: true,
			count: transactions.length,
			data: transactions
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		});
	}
}

// 			ADD transaction
//@route		POST /api/v1/transactions
exports.addTransaction = async(req, res, next) => {
	try {
		const { text, amount } = req.body;
		const transaction = await Transaction.create(req.body);

		return res.status(201).json({
			success: true,
			data: transaction
		});
	} catch (err) {
		if(err.name === 'ValidationError') {
			const messages = Object.values(err.errors).map(val => val.message);

			return res.status(400).json({
				success: false,
				error: message
			});
		} else {
			return res.status(500).json({
			success: false,
			error: 'Server Error'
		});
		}
	}
}

// 			Delete transaction
//@route		DELETE /api/v1/transactions/:id
exports.deleteTransaction = async(req, res, next) => {
	const id = req.params.id
	try {
		const transaction = await Transaction.findById(id);
		// console.log(transaction);
		if(!transaction) {
			res.status(404).json({
				success: false,
				error: 'Requested Item Not Found'
			});
		}

		// await Transaction.remove({_id: id});
		await transaction.remove();

		return res.status(200).json({
			success: true,
			data: {}
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		});
	}
}