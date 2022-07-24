import React from "react";
import s from './Forecast.module.css';
import { iconUrlFromCode } from "../../services/weatherService";

function Forecast({ title, items }) {
  console.log(items);
  return (
    <div >
      <div>
        <p className={s.p}>{title}</p>
      </div>
      <hr/>

      <div className={s.container}>
        {items.map((item, index) => (
          <div
            key={index}
            className={s.containercol}
          >
            <p>{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              alt="icon weather"
            />
            <p>{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;