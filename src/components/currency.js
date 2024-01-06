import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyOption = () => {
    const {dispatch} = useContext(AppContext);


    return(
        <div>
            <select className='currency-select' style={{backgroundColor: "#8CC152"}} onChange={(event) => {dispatch({type: "CHG_CURRENCY", payload: event.target.value,});}}>
                <option value='$' name='Dollar'>$ Dollar</option>
                <option value='£' name='Pound'>£ Pound</option>
                <option value='€' name='Euro'>€ Euro</option>
                <option value='₹' name='Ruppee'>₹ Ruppee</option>
            </select>
        </div>
    );
}

export default CurrencyOption;