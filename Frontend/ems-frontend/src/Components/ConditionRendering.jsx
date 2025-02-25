import { useState } from "react"

const ConditionRendering = () => {

    //Using state variable hook functional component
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    let messageType

    // if (isLoggedIn) {
    //     messageType = "User is Logged In!!!"

    // } else {
    //     messageType = "Please Login!"
    // }

    messageType = (isLoggedIn ? "User is logged in!" : "Please Login!")

    //Event handler for onClick >> handleLogIn()
    function handleLogIn() {
        setIsLoggedIn(true);
    }
    //Event handler for onClick >> handleLogOut()
    function handleLogOut() {
        setIsLoggedIn(false);
    }

    return(
        <div>
            <h1>Log in Status for App</h1>
            <p>Logged in Status: <b>{messageType}</b></p>
            <br />
            <button onClick={handleLogIn}>Click me to log in!</button>
            <br />
            <br />
            <button onClick={handleLogOut}>Click me to log out!</button>
        </div>
    )
}

export default ConditionRendering