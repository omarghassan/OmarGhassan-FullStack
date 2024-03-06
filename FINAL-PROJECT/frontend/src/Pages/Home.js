import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [tasks, setTasks] = useState(null)
    const navigate = useNavigate();

    const addTask = () => {
        navigate("/addtask")
    }

    useEffect(() => {
        fetch("/alltasks")
            .then((response) => response.json())
            .then((tasks) => {
                const lastFourTasks = tasks.slice(-4);
                setTasks(lastFourTasks);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="dashboard">
            <div className="dashboard-heading d-flex justify-content-center align-items-center">
                <h1 className="title">Welcome</h1>
                <button type="button" className="btn btn-success" onClick={addTask}>
                    Add Task
                </button>
            </div>
            <div>
                <h6 className="title">Time for some productivity, what do you think ?</h6>
            </div>
            <div className="container">
                <div className="row">
                    {tasks &&
                        tasks.map((task) => (
                            <div key={task._id} className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{task.title}</h5>
                                        <p className="card-text">{task.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>

    )
}

export default Home;