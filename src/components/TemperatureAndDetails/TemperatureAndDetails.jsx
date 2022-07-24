import React from "react";
import s from './TemperatureAndDetails.module.css';

import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../../services/weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div className={s.main}>
      <div >
        <p className={s.text}>{details}</p>
      </div>

      <div className={s.position}>
          <img src={iconUrlFromCode(icon)} alt="weather icon" className={s.icon} />
        <p className={s.temperature}>{`${temp.toFixed()}°`}</p>
        <div className={s.ihg}>
          <div>
            <UilTemperature size={18} className={s.iconMr} />
            Real feel:
            <span> {`${feels_like.toFixed()}°`}</span>
          </div>
          <div>
            <UilTear size={18} className={s.iconMr} />
            Humidity:
            <span> {`${humidity.toFixed()}%`}</span>
          </div>
          <div>
            <UilWind size={18} className={s.iconMr} />
            Wind:
            <span> {`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className={s.container}>
        <UilSun />
        <p>
          Rise:{" "}
          <span>
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className={s.mrL}>|</p>

        <UilSunset />
        <p>
          Set:{" "}
          <span>
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className={s.mrL}>|</p>

        <UilArrowUp />
        <p className="font-light">
          High:{" "}
          <span>{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className={s.mrL}>|</p>

        <UilArrowDown />
        <p >
          Low:{" "}
          <span>{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;