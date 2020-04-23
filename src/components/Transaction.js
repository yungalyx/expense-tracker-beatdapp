import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


// usually we call in passing parameters as props, but in this case we can redefine it into transaction
export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    // using binary to determine class type
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus '}>
            {transaction.text} <span> {sign}${Math.abs(transaction.amount)}</span> <span> {transaction.category} </span>
             <button onClick={()=>deleteTransaction(transaction.id)} className= 'delete-btn'>x</button>
        </li>
    )
}
