import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditTask = () => {

    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await fetch(`/task/${id}`);
                const task = await response.json();
                setTitle(task.title);
                setDescription(task.description);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTask();
    }, [id]);

    const updateTask = async () => {
        const updatedTask = {
            title,
            description,
        };

        try {
            const response = await fetch(`/updatetask/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTask),
            });

            if (response.ok) {
                navigate('/all-tasks');
            } else {
                console.error('Failed to update task');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="editTaskForm">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card p-4" style={{ width: "30rem", borderRadius: "1rem" }}>
                    <h1 className="text-center mb-4">Edit Task</h1>
                    <form className="d-flex flex-column justify-content-center">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter task title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" placeholder="Enter task description"></textarea>
                        </div>
                        <button type="button" className="btn btn-success mt-3" onClick={updateTask}>Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditTask;