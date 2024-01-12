import riyadh from "./assets/riyadh.jpg"
import madrid from "./assets/the-royal-palace-madrid.png"
import swiss from "./assets/swiss-winter.jpg"

const Home = () => {

    return (

        <div>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">


                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>


                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={riyadh} alt="Riyadh" className="d-block" style={{ width: "100%" }} />
                        <div className="carousel-caption">
                            <h3>Riyadh</h3>
                            <p>Explore amazing places in Riyadh.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={madrid} alt="Madrid" className="d-block" style={{ width: "100%" }} />
                        <div className="carousel-caption" style={{ color: "black" }}>
                            <h3>Madrid</h3>
                            <p>A trip that can't be forgotten.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={swiss} alt="Switzerland" className="d-block" style={{ width: "100%" }} />
                        <div className="carousel-caption">
                            <h3>Switzerland</h3>
                            <p>Relax in the beautiful nature.</p>
                        </div>
                    </div>
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            <div id="home-page-paragraph">
                <h2>Welcome to The Explorer</h2>
                <p className="welcome-paragragh">
                    Welcome to The Explorer, your passport to unparalleled travel experiences. Embark on a journey of discovery with our expertly curated trips to Riyadh, Madrid, and Switzerland. Whether you seek the bustling streets of Riyadh, the cultural richness of Madrid, or the breathtaking landscapes of Switzerland, The Explorer is your trusted companion in crafting unforgettable adventures. Start your exploration today and let us guide you to the extraordinary.
                </p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card">
                            <img src={riyadh} alt="Riyadh" style={{ width: "100%", borderRadius: "5px" }} />
                            <div className="card-body">
                                <h5 className="card-title">Riyadh</h5>
                                <p className="card-text">Experience the vibrant culture and rich heritage of Riyadh. From the grandeur of its historic architecture to the warmth of its bustling streets, every moment in this dynamic city is an opportunity for adventure. Delight in the flavors of Arabian cuisine, immerse yourself in art and culture, and embrace the spirited atmosphere that makes Riyadh an unforgettable destination.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img src={madrid} alt="Madrid" style={{ width: "100%", borderRadius: "5px" }} />
                            <div className="card-body">
                                <h5 className="card-title">Madrid</h5>
                                <p className="card-text">Experience the lively streets and rich heritage of Madrid. From the grandeur of its historic architecture to the warmth of its bustling plazas, every moment in this vibrant city is an opportunity for adventure. Delight in the flavors of Spanish cuisine, immerse yourself in art and culture, and embrace the spirited atmosphere that makes Madrid an unforgettable destination.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <img src={swiss} alt="Switzerland" style={{ width: "100%", borderRadius: "5px" }} />
                            <div className="card-body">
                                <h5 className="card-title">Switzerland</h5>
                                <p className="card-text">Embrace the breathtaking beauty of Switzerland. From the majestic Alps to the serene lakes, this picturesque country offers a paradise for nature lovers and adventure seekers alike. Immerse yourself in the charming villages, savor the world-renowned Swiss chocolate, and experience the unparalleled tranquility that makes Switzerland an unforgettable destination.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="home-page-paragraph">
                <h2>A breif About Us</h2>
                <p className="about-paragraph">
                    Established in 1984, The Explorer has been a cornerstone of travel excellence for over three decades. Our headquarters in Amman, Jordan, serves as the heart of our operations, where our passion for exploration and commitment to exceptional service converge. With a rich history of providing unparalleled travel experiences, The Explorer continues to be the premier choice for those seeking unforgettable journeys. Our dedication to crafting seamless and extraordinary adventures has made us a trusted name in the travel industry. Join us as we continue to redefine exploration and create timeless memories for our valued travelers.
                </p>
            </div>
        </div>
    )
}

export default Home;