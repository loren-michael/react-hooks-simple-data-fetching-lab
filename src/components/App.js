import React, { useEffect, useState } from 'react'

function App() {
    const baseURL = "https://dog.ceo/api/breeds/image/random";
    const [dogs, setDogs] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // console.log("hello")
        fetch(baseURL)
            .then(resp => resp.json())
            .then((resp) => {
                setDogs(resp);
                setIsLoaded(true);
                // console.log(resp)
            });
    }, [])

    if(!isLoaded) {
        return (
            <p>Loading...</p>
    )}

    return (
            <body>
                <img alt="A Random Dog" src={dogs.message}/>
            </body>
        )
}

export default App
