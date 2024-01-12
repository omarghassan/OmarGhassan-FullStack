import { Link } from "react-router-dom";
import riyadh from "./assets/riyadh.jpg"
import madrid from "./assets/the-royal-palace-madrid.png"
import swiss from "./assets/swiss-winter.jpg"

const Countries = () => {

    return (
        <div>
            <div id="countries-paragraph">
                <h1 style={{ textAlign: "center" }}>Countries</h1>
                <p>
                    Discover captivating destinations and enriching experiences that await you. Whether you seek historic landmarks, natural wonders, or vibrant cultural sites, there's a world of adventure waiting to be explored. From iconic attractions to hidden gems, let your wanderlust guide you to unforgettable journeys and timeless memories.
                </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card">
                            <img src={riyadh} alt="Riyadh" style={{ width: "100%", borderRadius: "5px" }} />
                            <div className="card-body">
                                <h5 className="card-title">Riyadh</h5>
                                <p className="card-text">Discover where to go and top places to visit in Riyadh.</p>
                                <Link to="/riyadh"><button type="button" class="btn btn-success">Let's Go</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img src={madrid} alt="Madrid" style={{ width: "100%", borderRadius: "5px" }} />
                            <div className="card-body">
                                <h5 className="card-title">Madrid</h5>
                                <p className="card-text">Discover where to go and top places to visit in Madrid.</p>
                                <Link to="/madrid"><button type="button" class="btn btn-success">Let's Go</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img src={swiss} alt="Switzerland" style={{ width: "100%", borderRadius: "5px" }} />
                            <div className="card-body">
                                <h5 className="card-title">Switzerland</h5>
                                <p className="card-text">Discover where to go and top places to visit in Switzerland.</p>
                                <Link to="/switzerland"><button type="button" class="btn btn-success">Let's Go</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countries;