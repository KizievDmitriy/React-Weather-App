import React from "react";
import s from './Forecast.module.css';
import { iconUrlFromCode } from "../../services/weatherService";

function Forecast({ title, items }) {
  console.log(items);
  return (
    <div >
      <div className="flex items-center justify-start mt-6">
        <p className={s.p}>{title}</p>
      </div>
      <hr className="my-2" />

      <div className={s.container}>
        {items.map((item, index) => (
          <div
            key={index}
            className={s.containercol}
          >
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;