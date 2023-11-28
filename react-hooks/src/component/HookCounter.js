import React, {useState} from "react";

function HookCounter() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount) //Array Destructuring

    return (
        <div>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount+1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount-1)}>Decrement</button>
            <br/>
            <button onClick={() => setCount(count+1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter;