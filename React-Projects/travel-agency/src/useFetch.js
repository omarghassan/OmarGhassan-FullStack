import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error("The data could not be fetched")
                }
                return response.json();
            }).then(data => {
                setData(data);
            }).catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }, [url])

    return { data, error }
}

export default useFetch;