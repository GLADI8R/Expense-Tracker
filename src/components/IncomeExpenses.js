import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../styles/styles.scss';

export const IncomeExpenses = () => {
	//use destructuring to get transactions
	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map(transaction => transaction.amount);
	
	const income = amounts.filter(item => item > 0).reduce((amount, item) => (amount += item), 0).toFixed(2);							
	const expense = (amounts.filter(item => item < 0).reduce((amount, item) => (amount += item), 0) * -1).toFixed(2);							

	return (
		<div className="inc-exp-cont">
			<div>
				<h4>Income</h4>
				<p className='green'>${income}</p>
			</div>
			<div>
				<h4>Expenses</h4>
				<p className='red'>${expense}</p>
			</div>
		</div>
	)
}
