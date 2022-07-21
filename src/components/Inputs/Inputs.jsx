import React, { Component } from 'react'
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import s from './Inputs.module.css';

function Inputs() {
  
    return (
    <div className={s.wrapper}>
      <div className={s.wrapper}>
        <input
        //   value={city}
        //   onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className={s.input}
        />
        <UilSearch
          size={20}
          className={s.iconSearch}
        //   onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className={s.iconLocation}
        //   onClick={handleLocationClick}
        />
      </div>

      <div className={s.wrapper}>
        <button
          name="metric"
          className={s.button}
        //   onClick={handleUnitsChange}
        >
          °C
          </button>
          <div className={s.span}/>
        <button
          name="imperial"
          className={s.button}
        //   onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
    )
  }


export default Inputs