import React, { useEffect } from 'react'
import "./Weather.scss"
import { useWeather } from "../../context/WeatherContext"
import { useCity } from '../../context/CityContext';

function WeatherCard({ cardName = '' }) {

    const { weatherDetail } = useWeather();
    const { activeCity } = useCity();

    useEffect(() => {
    }, [weatherDetail])

    return (
        <div>
            <div className="card-list row justify-content-center" >
                {weatherDetail.daily &&

                    weatherDetail.daily.map((weather, ind) =>
                        <div key={ind} className="card col-2 p-0">
                            <div className="info-header pl-3 pr-3">
                                <div className="city-name" > {activeCity.name} </div>
                                <div className="date" >
                                    {new Date(weather.dt * 1000).toDateString()}
                                </div>
                            </div>
                            <div className="icon">
                                {/* SUNNY */
                                    weather.weather[0].main === "Clear" &&
                                    <div className="icon-case" icon="sunny" data-label={weather.weather[0].main}>
                                        <span className="sun"></span>
                                    </div>
                                }

                                {/* CLOUDY */
                                    weather.weather[0].main === "Clouds" &&
                                    <div className="icon-case" icon="cloudy" data-label={weather.weather[0].main}>
                                        <span className="cloud"></span>
                                        <span className="cloud"></span>
                                    </div>
                                }

                                {/* SNOWMAN */}
                                {
                                    cardName === "snowly" &&
                                    <div className="icon-case" icon="snowy" data-label={weather.weather[0].main}>
                                        <span className="snowman"></span>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>}

                                {/* SOGGY */}
                                {

                                    weather.weather[0].main === "Rain" &&
                                    <div className="icon-case" icon="stormy" data-label={weather.weather[0].main}>
                                        <span className="cloud"></span>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>}

                                {/* MOON  */}
                                {
                                    cardName === "moon" &&
                                    <div className="icon-case" icon="supermoon" data-label={weather.weather[0].main}>
                                        <span className="moon"></span>
                                        <span className="meteor"></span>
                                    </div>}
                            </div>

                            <div className="weather-info">
                                <div className="info-body row m-0 text-center">
                                    <div className="centigrade mb-1 col-6">
                                        <div className="cent-icon mb-2 mt-2">
                                            <i className="fas fa-temperature-low"></i>
                                        </div>
                                        <div className="info-text">
                                            {weather.temp.max}
                                        </div>
                                    </div>
                                    <div className="wind mb-1 col-6">
                                        <div className="wind-icon mb-2 mt-2">
                                            <i className="fas fa-wind"></i>
                                        </div>
                                        <div className="info-text">
                                            {weather.wind_speed}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )


                }
            </div>


        </div>
    )
}

export default React.memo(WeatherCard);
