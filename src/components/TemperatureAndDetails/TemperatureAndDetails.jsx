import React from "react";
import s from './TemperatureAndDetails.module.css';

import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
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
          <div className="">
            <UilTemperature size={18} className={s.iconMr} />
            Real feel:
            <span className="font-medium ml-1"> {`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="">
            <UilTear size={18} className={s.iconMr} />
            Humidity:
            <span className="font-medium ml-1"> {`${humidity.toFixed()}%`}</span>
          </div>
          <div className="">
            <UilWind size={18} className={s.iconMr} />
            Wind:
            <span className="font-medium ml-1"> {`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className={s.container}>
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className={s.mrL}>|</p>

        <UilSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className={s.mrL}>|</p>

        <UilSun />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className={s.mrL}>|</p>

        <UilSun />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;