
import React, { useEffect } from 'react'
import { useState } from 'react'
import { addEmployee, getEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {

    //Defining state variables for form elements (1)employeeFirstName, (2)employeeLastName, (3)email
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    //Defining navigator
    const navigate = useNavigate();

    //Defining useParams to read dynamic URL parameter
    const {id} = useParams();

    //20250423 Defining state array object that hold validation message errors for form attributes
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    //Event handler when user submits the form
    function saveEmployee(e) {
        e.preventDefault();
        const employee = {firstName, lastName, email};

        //Calling validateForm method 
        if (validateForm()) {
            console.log(errors);
            //20250423 TO CALL addEmployee() in service layer to POST data to server
            addEmployee(employee).then((response) => {
                console.log(response.data);
                navigate('/employees');
            }).catch(error => {
                console.log(error);
            })
        } 
    }

    function updatePageTitle() {
        console.log(id);
        if(id) {
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

    //20250614 using useEffect react hook to pull single employee data for Update Employee Page

    useEffect(() => {
        getEmployee(id).then(response => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
        })
        .catch(error => {
            console.error(error);
        })
    }, []);// useEffect hook only render once when component loads!

    //Event handler to validate form
    function validateForm() {
        let validate = true;

        //20250423 Copying employee object into error state object variable
        const errrorCopy = {...errors};

        //20250423 adding validation of individual form attributes
        if (firstName.trim()) {
            errrorCopy.firstName = '' 
        } else {
            errrorCopy.firstName = 'First Name is Required!!!';
            validate = false;
        }
        if (lastName.trim()) {
            errrorCopy.lastName = '' 
        } else {
            errrorCopy.lastName = 'Last Name is Required!!!';
            validate = false;
        }
        if (email.trim()) {
            errrorCopy.email = '' 
        } else {
            errrorCopy.email = 'Email is Required!!!';
            validate = false;
        }
        //Setting state variable object
        setErrors(errrorCopy);

        return validate;
    }

  return (
    <div className='container'>
        <br />
        <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    updatePageTitle()
                }
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
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} 
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>
                        
                        {/* Input (2): Employee Last Name */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name:</label>
                            <input 
                                type="text"
                                placeholder='Enter Employee Last Name:'
                                name='lastName'
                                value={lastName}
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} 
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>
                        {/* Input (3): Employee Email */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input 
                                type="text"
                                placeholder='Enter Employee Email'
                                name='email'
                                value={email}
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
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