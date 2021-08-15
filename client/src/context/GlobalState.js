/* eslint-disable no-unused-vars */
import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';


//Initial State
const initialState = {
	transactions: [],
	error: null,
	loading: true
}

// Create Context
export const GlobalContext = createContext(initialState);


// For all files to have access to GlobalContext we need Provider
//Provider Component
//it takes props children and use destructuring
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions

	async function getTransactions() {
		try {
			const res = await axios.get('/api/v1/transactions');

			dispatch ({
				type: 'GET_TRANSACTION',
				payload: res.data.data
			});
		} catch (err) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				psyload: err.response.data.err
			});
		}
	}

	async function deleteTransaction(id) {
		try {
			await axios.delete(`api/v1/transactions/${id}`);

			dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		});
		} catch (err) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				psyload: err.response.data.err
			});
		}
	};

	async function addTransaction(transaction) {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}

		try {
			const res = await axios.post('api/v1/transactions', transaction, config);

			dispatch({
			type: 'ADD_TRANSACTION',
			payload: res.data.data
		});
		} catch (err) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				psyload: err.response.data.err
			});
		}
	};

	return (
		<GlobalContext.Provider value={{
			transactions: state.transactions,
			error: state.error,
			loading: state.loading,
			getTransactions,
			deleteTransaction,
			addTransaction
		}}>
			{children}
		</GlobalContext.Provider>
	);
}