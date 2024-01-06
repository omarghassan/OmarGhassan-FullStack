function EmployeeList({emps, title}) {
    
    return (
        <div className="blog-list">
            <h1> {title} </h1>
            {emps.map((emp) => (
                <div className="blog-info" key={emp.id}>
                    <h2> {emp.name} </h2>
                    <h3> Job Title: {emp.jobTitle} </h3>
                    <h5> Salary: {emp.salary} </h5>
                </div>
            ))}
        </div>
    )
}

export default EmployeeList;