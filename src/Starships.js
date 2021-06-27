import React from 'react'
import { useEffect, useState } from 'react'

const Starships = () => {
    const [ship, setShip] = useState([])
    const [starClass, setStarClass] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/starships/')
        .then(response => response.json())
        .then(starwarsData => {
            console.log(starwarsData.results)
            setShip(starwarsData.results)
            setStarClass(starwarsData.results)
            console.log(starwarsData.results[0].name)
            console.log(starwarsData.results[0].starship_class)
        })
        .catch(err => console.log(err))
    }, [])

    const renderedShips = ship.map((ship) => <div>{ship.name}</div>)
    const renderedClass = starClass.map((starClass) => <div>{starClass.starship_class}</div>)
    return (
        <div>
            <h1> {renderedShips}</h1>
            <h3> {renderedClass} </h3>
        </div>
    )
}

export default Starships 
