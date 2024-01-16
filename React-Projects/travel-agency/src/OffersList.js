import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const OffersList = ({ offers }) => {

    const { id } = useParams();
    const { data: offer, error } = useFetch('http://localhost:8000/offers/' + id)
    const navigate = useNavigate();

    const deleteBlog = () => {
        fetch("http://localhost:8000/offers/" + offer.id, {
            method: "DELETE"
        }).then(() => {
            navigate("/")
        })
    }

    return (
        offers.map((offer) => (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card" key={offer.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{offer.destination}</h5>
                                    <p className="card-text">
                                        Season: {offer.season} <br />
                                        Range of Prices: {offer.rangeOfPrices}
                                    </p>
                                    <button type="button" className="btn btn-success" >Edit</button>
                                    <button type="button" className="btn btn-danger" onClick={deleteBlog}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        ))
    )
}

export default OffersList;