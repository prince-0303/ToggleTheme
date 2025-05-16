import { useState, useEffect } from "react";


function Fetch() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/quotes')
            .then(response => response.json())
            .then((data) => setData(data.quotes))
            .catch((error) => console.log('Error occured', error))
            .finally(() => console.log("Completed Fetch"))
    }, [])

    return (
        <div>
            {data.slice(0,10).map(quote => (
                <div key={quote.id}>
                    <h2>{quote.quote}</h2>
                    </div>
            ))}
        </div>
    )
}

export default Fetch;