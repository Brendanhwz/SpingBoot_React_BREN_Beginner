
import React from "react";

class Employee extends React.Component {

    //Defining constructor to access state object
    constructor(props) {
        super(props)

        //Defining state object inside the class default constructor
        this.state = {
            firstName:"Tobio",
            lastName:"Kageyama",
            email:"tobiokageyama@karusonohigh.com"
        }
    }

    //Defining event handler for updating employee
    updateEmployee() {
        console.log("Updating")
        this.setState({
            firstName:"Shizumi",
            lastName:"Kiyoko",
            email:"ShizumiKiyoko@karusonohigh.com"
        })
    }

    //To render
    render() {
        return (
            <div>
                <h1>Employee Details</h1>
                <p>Employee First Name: {this.state.firstName}</p>
                <p>Employee Last Name: {this.state.lastName}</p>
                <p>Employee Email: {this.state.email}</p>
                {/* Adding Button to change the state of the state object property values*/}
                <button onClick={() => this.updateEmployee()}>Click Here to Switch Employee</button>
            </div>
        )
    }
}

//Export component out
export default Employee