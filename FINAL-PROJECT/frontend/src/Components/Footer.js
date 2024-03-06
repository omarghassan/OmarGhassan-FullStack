import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="bg-dark text-white text-center text-lg-start">

            <div className="container p-4">

                <div className="row">

                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Taskies</h5>

                        <p style={{ textAlign: "justify" }}>
                            Taskies is a user-friendly task management system designed to help you stay organized and productive. With Taskies, you can easily keep track of your tasks, set priorities, and mark your progress. Our mission is to provide a simple, intuitive tool that makes task management a breeze. Whether you're working on a complex project or just trying to keep your daily to-do list under control, Taskies is here to help. Try Taskies today and discover a smarter way to manage your tasks.
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="/about" className="text-white">About Taskies</Link>
                            </li>
                            <li>
                                <Link to="/sitemap" className="text-white">Sitemap</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5>Follow Us</h5>
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

            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                © 2024 All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer;