import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";



const CityContext = createContext();

export const CityProvider = ({ children }) => {
    const [activeCity, setactiveCity] = useState({});

    const showPosition = (location) => {
        const lat = location.coords.latitude;
        const lon = location.coords.longitude;
        const options = {
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&appid=2c9c7ab97001a33b80cab75254178bc8`,
        };

        axios(options)
            .then(function (response) {
                setactiveCity(response.data.list[0]);
                localStorage.setItem('userLocation', JSON.stringify(response.data.list[0]))
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    useEffect(() => {
        setactiveCity({
            id: 34,
            latitude: "41.0053",
            longitude: "28.9770",
            name: "İstanbul",
            population: 14657434,
            region: "Marmara"
        });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }

    }, [])

    const values = {
        activeCity,
        setactiveCity
    }


    return (
        <CityContext.Provider value={values}>{children}</CityContext.Provider>
    )
}

export const useCity = () => useContext(CityContext);

export default CityContext;