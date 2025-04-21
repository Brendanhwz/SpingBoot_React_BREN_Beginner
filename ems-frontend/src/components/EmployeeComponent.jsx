
import React from 'react'
import { useState } from 'react'

const EmployeeComponent = () => {

    //Defining state variables for form elements (1)employeeFirstName, (2)employeeLastName, (3)email
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    //Event handler when user submits the form
    function saveEmployee(e) {
        e.preventDefault();
        const employee = {firstName, lastName, email};
        console.log(employee)
    }

  return (
    <div className='container'>
        <br />
        <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Add Employee</h2>
                {/* Main form content inside card-body class */}    
                <div className='card-body'>
                    <form action="">
                        {/* Input (1): Employee First Name */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name:</label>
                            <input 
                                type="text"
                                placeholder='Enter Employee First Name:'
                                name='firstName'
                                value={firstName}
                                className='form-control'
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        {/* Input (2): Employee Last Name */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name:</label>
                            <input 
                                type="text"
                                placeholder='Enter Employee Last Name:'
                                name='lastName'
                                value={lastName}
                                className='form-control'
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        {/* Input (3): Employee Email */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input 
                                type="text"
                                placeholder='Enter Employee Email'
                                name='email'
                                value={email}
                                className='form-control'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Submit Button */}
                        <button className='btn btn-success' onClick={saveEmployee}>Submit</button>

                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default EmployeeComponent