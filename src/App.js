import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';
import './styles/styles.scss';

function App() {
  return (
    <GlobalProvider>
    <div className="center header">
      <h1 className="sans">Expense Tracker</h1>
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
    </GlobalProvider> 
  );
}

export default App;
