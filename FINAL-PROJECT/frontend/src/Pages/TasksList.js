import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const TasksList = () => {
    const [tasks, setTasks] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/alltasks")
            .then(response => response.json())
            .then(tasks => setTasks(tasks))
            .catch(error => console.error(error))
    }, [])

    const deleteTask = (id) => {
        fetch("/deletetask/" + id, {
            method: "DELETE"
        }).then(() => {
            navigate("/all-tasks");
        });
    };

    return (
        <div className="all-Tasks">
            <h1 className="title">My Tasks</h1>
            <div className="container">
                <div className="row">
                    {tasks && tasks.map((task) => (
                        <div key={task._id} className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{task.title}</h5>
                                    <p className="card-text">
                                        {task.description}
                                    </p>
                                    <Link to={`/edittask/${task._id}`} className="btn btn-success">
                                        Edit
                                    </Link>
                                    <button type="button" className="btn btn-danger" onClick={() => deleteTask(task._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TasksList;