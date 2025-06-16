import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const ListEmployeeComponent = () => {

    //20250417 Setting state variable to set employee list
    const[employees, setEmployees] = useState([]);

    const navigate = useNavigate();

    //20250417 using useEffect hook to handle axios REST method calls
    useEffect(() => {
        listAllEmployees();
    }, [])

    function listAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee() {
        navigate("/add-employee")
    }

    function updateEmployee(employeeId) {
        navigate(`/edit-employee/${employeeId}`)
    }

    function deleteSingleEmployee(employeeId) {
        //console.log(employeeId);
        deleteEmployee(employeeId).then((response) => {
            listAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }


  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee} >Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                </tr>
            </thead>    
            <tbody>
                {
                    //20250417 Mapping state variable method 
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => {
                                    updateEmployee(employee.id)
                                }}>Update</button>
                                
                                <button className='btn btn-danger' onClick={() => {
                                    deleteSingleEmployee(employee.id)
                                }} style={{marginLeft: '20px'}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent