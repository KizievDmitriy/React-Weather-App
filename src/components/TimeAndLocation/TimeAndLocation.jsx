import React from "react";
import s from './TimeAndLocation.module.css';
import { formatToLocalTime } from "../../services/weatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className={s.overlay}>
        <p className="">
          {formatToLocalTime(dt, timezone)}
        </p>
        <h1 className="">{`${name} , ${country}`}</h1>
      </div>
    </div>
  );
}

export default TimeAndLocation;