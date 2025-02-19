const Student = (props) => {

    const {firstname, lastname, email} = props

    return (
        <div>
            <h1>Student Details</h1>
            <p>Student First Name: {firstname}</p>
            <p>Student Last Name: {lastname}</p>
            <p>Student Email Address: {email}</p>
        </div>
    )
}

export default Student