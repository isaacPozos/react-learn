import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

const [counter, setCounter] = useState( value );

    const handleRestar = () => {
        setCounter( counter - 1);
    }
    const handleReset = () => setCounter( value);
    
    const handleAdd = () => setCounter( counter + 1);
    return (
        <div>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleRestar }>-1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleAdd }>+1</button>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

