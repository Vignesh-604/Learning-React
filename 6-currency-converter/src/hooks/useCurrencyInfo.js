import { useEffect, useState } from "react";

// Custom hook
function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((jsonResponse) => setData(jsonResponse[currency]))
        .catch((e) => console.log(e))
        console.log(data);
    }, [currency])

    return data
}

export default useCurrencyInfo      // passing the entire function