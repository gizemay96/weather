import React from 'react'
import SelectCity from '../selectCity/SelectCity';
import WeatherCard from "../weatherCard/WeatherCard";
import './container.scss'

function Container() {
    return (
        <div className="container">
            <div className="page-case d-flex">
                <div className="select-component">
                    <SelectCity></SelectCity>
                </div>
                <WeatherCard></WeatherCard>
            </div>
        </div>
    )
}

export default Container;
