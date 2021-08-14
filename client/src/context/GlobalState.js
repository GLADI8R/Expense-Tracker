/* eslint-disable no-unused-vars */
import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


//Initial State
const initialState = {
	transactions: []
}

// Create Context
export const GlobalContext = createContext(initialState);


// For all files to have access to GlobalContext we need Provider
//Provider Component
//it takes props children and use destructuring
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions
	function deleteTransaction(id) {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		});
	};

	function addTransaction(transaction) {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction
		});
	};

	return (
		<GlobalContext.Provider value={{
			transactions: state.transactions,
			deleteTransaction,
			addTransaction
		}}>
			{children}
		</GlobalContext.Provider>
	);
}