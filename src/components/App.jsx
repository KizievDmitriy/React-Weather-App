import React from 'react';
import s from './App.module.css';
import Inputs from './Inputs/Inputs';
import TemperatureAndDetails from './TemperatureAndDetails/TemperatureAndDetails';
import TimeAndLocation from './TimeAndLocation/TimeAndLocation';
import TopButtons from './TopButtons/TopButtons';
import Forecast from "./Forecast/Forecast";
import getFormattedWeatherData from "../services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const [query, setQuery] = useState({ q: "kiev" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "coldBackground";
    const threshold = units === "metric" ? 30 : 60;
    if (weather.temp <= threshold) return "coldBackground";

    return "hotBackground";
  };

  return (
    <div className={s.container2}>
      <div className={s.container}>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
      </div>
      {weather && (
        <div className={`${formatBackground()} main`}>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
};
