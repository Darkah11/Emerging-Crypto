import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [ loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);
    const apiKey = 'CG-ieVj3jKnj89un4nMLWJYnzLc';
    const requestOptions = {
            method: 'GET',
            headers: {
                'x-cg-pro-api-key': apiKey,
            },
        };

    useEffect(() => {
        // fetch(url, requestOptions)
        fetch(url)
        .then( res=> {
            if(!res.ok) {
                throw Error("Could not fetch data")
            }
            return res.json();
        })
        .then( data => {
            setData(data);
            setLoading(false);
            setError(null);
        })
        .catch ( err => {
            setLoading(false);
            setError(err.message);
        })
    }, [url])

    return { data, loading, error }
}
export default useFetch;