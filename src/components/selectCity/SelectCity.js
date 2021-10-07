import React, { useEffect, useState } from 'react'
import { useCity } from '../../context/CityContext';
import cityListData from '../../jsonData/cityList.json';
import "./selectCity.scss"

function SelectCity() {
    const { activeCity, setactiveCity } = useCity();
    const [isUserLocationActive, setisUserLocationActive] = useState(false);
    const [cityList] = useState(cityListData);

    const getUserLoction = () => {
        const userLocation = localStorage.getItem('userLocation');
        setactiveCity(JSON.parse(userLocation))
    }

    useEffect(() => {
        const userCity = JSON.parse(localStorage.getItem('userLocation'));
        if (userCity) {
            setisUserLocationActive(userCity.name === activeCity.name);
        }
    }, [activeCity])

    return (
        <div>

            {
                activeCity &&
                <div className="btn-group">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                        <i className="fas fa-city"></i>   {activeCity.name}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="defaultDropdown">
                        {
                            !isUserLocationActive &&
                            <li><button onClick={() => getUserLoction()} className="dropdown-item">
                                <i className="fas fa-map-marker-alt"></i>  My Location
                            </button></li>
                        }
                        {
                            cityList.map((item, ind) =>
                                <li key={ind} ><button onClick={() => setactiveCity(item)} className="dropdown-item">{item.name}</button></li>
                            )
                        }
                    </ul>
                </div>

            }


        </div>
    )
}

export default React.memo(SelectCity);
