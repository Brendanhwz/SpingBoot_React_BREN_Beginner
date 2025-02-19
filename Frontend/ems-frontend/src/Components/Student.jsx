const Student = (props) => {

    return (
        <div>
            <h1>Student Details</h1>
            <p>Student First Name: {props.studentData1.firstname}</p>
            <p>Student Last Name: {props.studentData1.lastname}</p>
            <p>Student Email Address: {props.studentData1.email}</p>
        </div>
    )
}

export default Student