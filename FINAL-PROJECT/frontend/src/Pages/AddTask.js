import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const addTask = async () => {
        const newTask = {
            title,
            description,
        };

        try {
            const response = await fetch('/addtask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask),
            });

            if (response.ok) {
                navigate('/all-tasks');
            } else {
                console.error('Failed to add task');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="addTaskForm">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card p-4" style={{ width: '30rem', borderRadius: '1rem' }}>
                    <h1 className="text-center mb-4">Add Task</h1>
                    <form className="d-flex flex-column justify-content-center">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter task title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" placeholder="Enter task description"></textarea>
                        </div>
                        <button type="button" className="btn btn-success mt-3" onClick={addTask}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddTask;