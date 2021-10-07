import React from 'react'
import SelectCity from './SelectCity';
import WeatherCard from "./weatherCard/WeatherCard"

function Container() {
    return (
        <div className="container">
            <SelectCity></SelectCity>
            <WeatherCard></WeatherCard>
        </div>
    )
}

export default Container;
