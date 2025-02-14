import React from "react";

//20250214 Building class components

class Greetings extends React.Component {

    render() {
        return <h1>Welcome {this.props.name} have a good day!</h1>
    }
}

export default Greetings