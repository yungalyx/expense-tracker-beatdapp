import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';


// Initial state
const initialState = {
    // dummy transactions
    transactions: [
        {id: 1, text: 'Flower', amount: -30, category: 'Special'}, 
        {id: 2, text: 'Salary', amount: 800, category: 'recurring'},
        {id: 3, text: 'Porsche', amount: -700, category: 'recurring'}
    ]
}

/* 
create a context object called GlobalContext that holds onto data in initalState
the reason we use context is because it is easier to pass data around than to do it through props
in react components
*/
export const GlobalContext = createContext(initialState);


// this is a provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION', 
            payload: id
        });
    }

    function addTransaction(transaction) { 
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    // GlobalContext can be imported by different classes and these values/functions can be used...
    // making changes to high level data
    return (<GlobalContext.Provider value={{
        transactions: state.transactions, 
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
} 
