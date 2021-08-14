import React from "react";

export const Transaction = (props) => {
	const sign = props.transaction.amount < 0 ? '-' : '+';

	return (
		<li className={props.transaction.amount < 0 ? 'red' : 'green'}>
			{props.transaction.text}<span>{sign}${Math.abs(props.transaction.amount)}</span>
			<button /*onClick={() => deleteTransaction(props.transaction.id)}*/ className="delete-btn">x</button>	
		</li>
	)
}
