import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="bg-dark text-white text-center text-lg-start">

            <div className="container p-4">

                <div className="row">

                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">The Explorer</h5>

                        <p style={{ textAlign: "justify" }}>
                            Explore the world with The Explorer! Embark on unforgettable journeys to Riyadh, Madrid, and Kuwait with our expertly crafted travel experiences. Discover the beauty of these vibrant destinations and create lasting memories with The Explorer, your gateway to extraordinary adventures.
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="/" className="text-white">Home</Link>
                            </li>
                            <li>
                                <Link to="/offers" className="text-white">Offers</Link>
                            </li>
                            <li>
                                <Link to="/countries" className="text-white">Countries</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1692.3009832298183!2d35.83166641035718!3d31.971693344369367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca10973a828d5%3A0x6c8e7bb55bfa2f!2sEMAN%20Lab!5e0!3m2!1sen!2sjo!4v1705004217660!5m2!1sen!2sjo" width="350" height="300" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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