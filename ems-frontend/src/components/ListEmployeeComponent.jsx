
import React from 'react'

const ListEmployeeComponent = () => {

    //20250407 prepping of dummy data for employee (1)ID,(2)firstName,(3)lastName,(4)email
    const dummyData = [
        {
            "id": 1,
            "firstName": "Shoyo",
            "lastName": "Hinata",
            "email": "hinataShoyo@karasunohigh.com"
        },
        {
            "id": 2,
            "firstName": "Tobio",
            "lastName": "Kageyama",
            "email": "kageyamaTobio@karasunohigh.com"
        },
        {
            "id": 3,    
            "firstName": "Fujiwara",
            "lastName": "Takumi",
            "email": "takumiFujiwara@tofuhouse.com"
        }
    ]


  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {/* For writting JS code in the JSX enclose within {} */}
                {
                    dummyData.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent