import taskies from "../Assets/Taskies.png"

const About = () => {

    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>About Taskies</h2>
                        <p style={{ textAlign: "justify" }}>
                            Welcome to Taskies, your one-stop solution for managing tasks efficiently and effectively. Taskies is designed to help you streamline your workflow, increase productivity, and stay organized. Our user-friendly interface allows you to easily create and track tasks, ensuring you never lose sight of your responsibilities. Whether you're juggling multiple projects or simply trying to stay on top of your daily to-do list, Taskies offers the simplicity and flexibility you need. Start simplifying your task management today with Taskies.
                        </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={taskies} alt="Taskies Logo" style={{ width: "300px", height: "300px" }} />
                    </div>
                    <div className="col-md-6">
                        <h2>Follow Us</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <i className="bi bi-twitter"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/" target="_blank" rel="noreferrer">
                                            <i className="bi bi-github"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;