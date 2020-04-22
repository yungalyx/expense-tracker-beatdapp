import React from 'react';

import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { TransactionsList } from './components/TransactionsList'
import { AddTransaction } from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'
import './App.css';

function App() {
  return (
    <GlobalProvider textAlign="center"> 
        <Header />
        <div className='container'>
            <Balance />
            <AddTransaction />
            <TransactionsList />
           
        </div>
    </GlobalProvider>
  );
}

export default App;
