import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./ListItem.css";
import { ScaleLoader } from "react-spinners";

const ListItem = (props) => {
  const { fetchUrl } = props;
  const { instance, instance2 } = axios;
  const [city, setCity] = useState();
  const [forecast, setForecast] = useState();
  const [loading, setLoading] = useState(false);

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const index = date.getDay();

  const MINUTE_MS = 60000;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await instance.get(fetchUrl);
      const prediction = await instance2.get(fetchUrl);
      setCity(response);
      setForecast(prediction);
      setLoading(false);
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <li className="list_item_global">
        {city?.data.location.name}{" "}
        {!loading ? (
          <div className="li_cont">
            <p className="weather_cond">{city?.data.current.condition.text}</p>
            <div className="day_time_temp">
              <p className="day_time">{`${weekdays[index].substr(
                0,
                3
              )}  ${city?.data.location.localtime.substr(11, 15)}`}</p>
              <p className="temp_globe">{city?.data.current.temp_c}</p>
            </div>
          </div>
        ) : (
          <div className="loader_container">
            <ScaleLoader color="rgba(20, 22, 21, 1)" />
          </div>
        )}
      </li>
    </div>
  );
};

export default ListItem;
