import React, {useContext} from 'react'
import { GlobalContext} from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionsList = () => {

    // here is a case where we need to access data from our context object
    const { transactions } = useContext(GlobalContext); 
 

    /* 
    1. getting data of transactions from GlobalContext
    2. mapping over the list with .map and changing the data into Transaction react components, 
    3. handing over props with transaction = {transaction}... think of it as a passing parameter
    4. also if you're iterating over a list, you need a index key (also a prop)
    */
    return (
        <>
          <h3>List of transactions</h3>  
          <ul className='list'>
              {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
              
          </ul>
        </>
    )
}
