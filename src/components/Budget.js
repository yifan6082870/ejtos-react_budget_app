import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
            alert("You cannot exceed 20000 budget");
        } else if(event.target.value < totalExpenses){
            alert("You cannot have budge lower than your total expenses");
        } else {
            setNewBudget(parseInt(event.target.value));
            dispatch({
                type: "SET_BUDGET",
                payload: parseInt(event.target.value),
            });
        }
    }
    
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
