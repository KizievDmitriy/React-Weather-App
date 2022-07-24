import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import s from './Inputs.module.css';
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
    const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };
    return (
    <div className={s.wrapper}>
      <div className={s.wrapper}>
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className={s.input}
        />
        <UilSearch
          size={20}
          className={s.iconSearch}
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className={s.iconLocation}
          onClick={handleLocationClick}
        />
      </div>

      <div className={s.wrapper}>
        <button
          name="metric"
          className={s.button}
          onClick={handleUnitsChange}
        >
          °C
          </button>
          <div className={s.span}/>
        <button
          name="imperial"
          className={s.button}
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
    )
  }


export default Inputs