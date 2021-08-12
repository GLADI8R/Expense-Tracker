import React from 'react'

export const TransactionList = () => {
	return (
		<>
			<h4 className='mt-2'>History</h4>
			<hr />
			<ul className='list'>
				<li className='red'>Cash<span>-$10.0</span></li>
				<li className='green'>Cash<span>+$20.0</span></li>
			</ul>
		</>
	)
}
