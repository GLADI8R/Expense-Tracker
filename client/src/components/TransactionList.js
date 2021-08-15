import { useContext, Fragment, useEffect } from "react"
import { Transaction } from './Transaction'
import { GlobalContext } from "../context/GlobalState"

export const TransactionList = () => {

	//use destructuring to get transactions
	const { transactions, getTransactions } = useContext(GlobalContext);

	useEffect(() => {
		getTransactions();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Fragment>
			<h4 className='mt-2'>History</h4>
			<hr />
			<ul className='list'>
				{transactions.map(transaction => (
					<Transaction key={transaction._id} transaction={transaction} />
				))}
			</ul>
		</Fragment>
	)
}
