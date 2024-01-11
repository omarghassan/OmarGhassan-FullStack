import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar">
            <h1>Our Website</h1>
            <div className="Links">
                <Link to = "/">Home</Link>
                <Link to = "/create">New Blog</Link>
                <Link to = "/pages/about">About Us</Link>
            </div>
        </nav>
    )
}

export default Navbar;