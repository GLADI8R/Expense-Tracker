import React from 'react'

export const AddTransaction = () => {
	return (
		<>
			<h4 className='mt-2'>Add Transaction</h4>
			<hr />
			<form>
        <div className="form-control">
          <label for="text">Text</label>
          <input type="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
		</>
	)
}
