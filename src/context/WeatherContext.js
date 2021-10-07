import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useCity } from '../context/CityContext';



const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const { activeCity } = useCity();
    const [weatherDetail, setDetail] = useState({})

    useEffect(() => {
        if (activeCity && (activeCity.coord || activeCity.latitude)) {
            const lat = activeCity.coord ? activeCity.coord.lat : activeCity.latitude;
            const lon = activeCity.coord ? activeCity.coord.lon : activeCity.longitude;

            const options = {
                method: 'GET',
                url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&units=metric&exclude=hourly&appid=2c9c7ab97001a33b80cab75254178bc8`,
            };

            axios(options)
                .then(function (response) {
                    setDetail(response.data)
                })
                .catch(function (error) {
                    console.error(error);
                });
        }

    }, [activeCity])

    const values = {
        weatherDetail,
        setDetail
    }


    return (
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    )
}

export const useWeather = () => useContext(WeatherContext);

export default WeatherContext;