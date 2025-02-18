// function HelloWorld () {

//     return <h2>Hello World This is Brendan HoO</h2>
// }

// export default HelloWorld

//20250211 rewritting the funciton in ES6 arrow function style

// const HelloWorld = (props) => <h1>Hello, {props.name} Have a good day!</h1>

//20250218 JSX Rules >> Returning multiple HTML elements in a single parent tag

const message = "Lei Hou Mo"

const HelloWorld = (props) => {

    //Adding event handler here
    function clickHandler() {
        alert("Button Clicked!")
    }

    return (
        <div>
            <h1>Hello World</h1>
            <h2 className="title">Welcome Banner Message {message}</h2>
            <p>{props.name} was here</p>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
}

export default HelloWorld