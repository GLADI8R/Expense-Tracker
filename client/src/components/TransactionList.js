import { useContext, Fragment } from "react"
import { Transaction } from './Transaction'
import { GlobalContext } from "../context/GlobalState"

export const TransactionList = () => {

	//use destructuring to get transactions
	const { transactions } = useContext(GlobalContext);

	return (
		<Fragment>
			<h4 className='mt-2'>History</h4>
			<hr />
			<ul className='list'>
				{transactions.map(transaction => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</Fragment>
	)
}
