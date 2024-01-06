import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value > 2200) {
            alert("You cannot exceed 20000 budget");
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
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
