import React, { useEffect, useState } from 'react';

function Quotes() {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetch('https://dummyjson.com/quotes')
            .then(response => response.json())
            .then(data => {
                if (data && data.quotes && data.quotes.length > 0) {
                    setQuote(data.quotes.map(quote => quote.quote).join(" <br> "));
                }
                console.log(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Quotes</h1>
            <ul>
                {
                quote.split(" <br> ").slice(0, 10).map((q, index) =>
                    <li
                        key={index}>{q}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Quotes;