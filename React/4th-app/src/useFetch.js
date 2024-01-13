import { useEffect, useState } from "react"

const useFetch = (url) => {

    //List of Objects
    const [title, setTitle] = useState(["Our Blogs"]);
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    console.log(response);
                    if (!response.ok) {
                        throw Error("The data could not be fetched")
                    }
                    return response.json();
                }).then(data => {
                    console.log(data);
                    setData(data);
                    setLoading(false)
                }).catch(error => {
                    console.log(error.message)
                    setError(error.message)
                    setLoading(false)
                })
        }, 1000)
    }, [url])

    return { title, data, isLoading, error }
}


export default useFetch;