import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../styles/styles.scss';

export const Balance = () => {
	//use destructuring to get transactions
	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map(transaction => transaction.amount);
	const total = amounts.reduce((amount, item) => (amount += item), 0).toFixed(2);

	return (
		<>
			<h4>Your Balance:</h4>
			<h2>${total}</h2>
		</>
	)
}
