import React, {useState} from 'react';
import Button from "../../components/button/Button";

const CountPage = () => {

    const [count, setCount] = useState(1)

    const handleIncrease = () => {
        setCount(count+1)
    }
    const handleDecrease = () => {
        if (count > 1){
            setCount(count-1)
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <Button onClick={handleIncrease} label="increase"></Button>
            <Button onClick={handleDecrease} label="decrease"></Button>
            {/*<button onClick={handleIncrease} >increase</button>*/}
            {/*<button onClick={handleDecrease} >decrease</button>*/}
        </div>
    );
};

export default CountPage;