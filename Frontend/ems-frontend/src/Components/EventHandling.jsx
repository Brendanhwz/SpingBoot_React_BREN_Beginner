
import { useState } from "react"

const EventHandling = () => {

    //Declaring the state variable and initialising useState hook
    const [count, setCount] = useState(0)

    //state function to increment the count
    function updateCount() {
        setCount(count + 1)
    }
    //state function to reset the count value
    function restCount() {
        setCount(0)
    }

    //returning JSX element
    return (
        <div>
            <h1>Event Handling in React</h1>
            <p>Current State Variable Count: {count}</p>
            <button onClick={updateCount}>Click here to increment the value count!</button>
            <button onClick={restCount}>Click here to reset the value count!</button>
        </div>
    )

}

export default EventHandling