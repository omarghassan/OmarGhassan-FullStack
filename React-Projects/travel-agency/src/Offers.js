import useFetch from "./useFetch";
import OffersList from "./OffersList";

const Offers = () => {

    const { data: offers, error } = useFetch('http://localhost:8000/offers')
    return (
        <div>
            <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>Offers</h1>

            {error && <div> {error} </div>}
            {offers && <OffersList offers={offers} /> }

        </div>
    )
}

export default Offers;