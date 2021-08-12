import '../styles/styles.scss';

export const IncomeExpenses = () => {
	return (
		<div className="inc-exp-cont">
			<div>
				<h4>Income</h4>
				<p className='green'>$0.00</p>
			</div>
			<div>
				<h4>Expenses</h4>
				<p className='red'>$0.00</p>
			</div>
		</div>
	)
}
