import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        
        const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            text: text,
            amount: +amount, 
            category: category 
        }
            
        addTransaction(newTransaction);
    }

    return (
        <>
            <h3> Add new transaction </h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor='text'> Text </label>
                    <input 
                        type='text' 
                        value={text} 
                        onChange={(e)=> setText(e.target.value)} 
                        placeholder="enter transaction name..." 
                    />
                </div>

                <div className='form-control'> 
                    <label htmlFor='amount'> Amount </label>
                    <input 
                        type='number' 
                        value = {amount}
                        onChange={(e)=> setAmount(e.target.value)}
                        placeholder='enter amount...'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='category'> Category </label>
                    <input 
                        type='text'
                        value = {category}
                        onChange={(e)=> setCategory(e.target.value)}
                        placeholder='enter category...'/>
                </div>
                <button className="btn"> Add Transaction </button>

            </form>            
        </>
    )
}
