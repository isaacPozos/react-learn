import { useState } from "react";

export const useCounter = (valInit = 10)=>{
    const [counter, setCounter] = useState(valInit);

    const increment = (val = 1)=>{
        setCounter( counter + val);
    }
    const decrement = (val = 1)=>{
        if(counter === 0) return;
        setCounter( counter - val);
    }
    const reset = ()=>{
        setCounter( valInit );
    }

    return{ counter, increment, decrement, reset };
} 