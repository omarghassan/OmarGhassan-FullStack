import { useEffect, useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("You Clicked " + counter + " times.")
    });

    return (
        <div className="counter">
            <h1>You clicked {counter} times</h1>
            <button onClick={() => setCounter(counter + 1)}>Click to Increment</button>
        </div>
    )
}

export default Counter;