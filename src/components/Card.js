import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Card.css";
import { ScaleLoader } from "react-spinners";

const Card = (props) => {
  const { fetchUrl } = props;
  const { instance, instance2 } = axios;
  const [city, setCity] = useState();
  const [forecast, setForecast] = useState();
  const [loading, setLoading] = useState(false);

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
      {/* {loading && <ScaleLoader color="rgba(20, 22, 21, 1)" />} */}
      {!loading ? (
        <div class="card" style={{ width: "18rem;" }}>
          <img
            src={city?.data.current.condition.icon}
            class="card-img-top"
            alt={city?.data.current.condition.text}
          />
          <div class="card-body">
            <h5 class="card-title">
              {`${city?.data.location.name} - 
                ${city?.data.current.temp_c}
                `}
            </h5>
            <h5 className="card-title">{city?.data.current.condition.text}</h5>
            <p className="card-body">
              Local Time - {city?.data.location.localtime.substr(11, 15)} <br />
              Feels like - {city?.data.current.feelslike_c} <br />
              Humidity - {city?.data.current.humidity} <br />
              Wind Speeds - {city?.data.current.wind_kph} Kph
            </p>
          </div>
        </div>
      ) : (
        <div className="loadbar">
          <ScaleLoader color="rgba(20, 22, 21, 1)" />
        </div>
      )}
    </div>
  );
};

export default Card;
