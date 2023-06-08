import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "../axios";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { ScaleLoader } from "react-spinners";

const Home = (props) => {
  const { instance, instance2 } = axios;
  const { fetchUrl } = props;
  const [city, setCity] = useState();
  const [forecast, setForecast] = useState();
  const [label, setLabel] = useState([]);
  const [temp, setTemp] = useState([]);
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
      // const response = await axios.get(fetchUrl);
      setLoading(true);
      const response = await instance.get(fetchUrl);
      const prediction = await instance2.get(fetchUrl);

      setCity(response);
      setForecast(prediction);
      const time = prediction.data.forecast.forecastday[0].hour;
      const hours = time.map((hour) => {
        return hour.time.substr(11, 15);
      });
      setLabel(hours);
      const temperatures = time.map((temp) => {
        return temp.temp_c;
      });
      setTemp(temperatures);
      setLoading(false);
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: label,
    datasets: [
      {
        label: "Hour-Wise Temperature",
        backgroundColor: "black",
        borderColor: "black",
        data: temp,
      },
    ],
  };

  // console.log(city);
  return (
    <div className="home">
      {loading && (
        <div className="loader">
          <ScaleLoader
            // style={{ marginTop: "300px" }}
            color="rgba(20, 22, 21, 1)"
          />
        </div>
      )}
      {!loading && (
        <div className="container">
          <div className="grid1">
            <div className="flex1">
              <div className="image">
                <img
                  src={city?.data.current.condition.icon}
                  className="card-img-top"
                  alt={city?.data.current.condition.text}
                />
              </div>
              <div className="weather">
                <p className="temperature">{city?.data.current.temp_c}</p>
                <p className="day-type">{city?.data.current.condition.text}</p>
                <p className="location">{city?.data.location.name}</p>
                <p className="day">{`${
                  weekdays[index]
                } ${city?.data.location.localtime.substr(11, 15)}`}</p>
              </div>
            </div>
            <div className="flex2">
              <div className="list">
                <ul className="weather_list">
                  <li className="weather_details">
                    Feels Like
                    <p className="weather_figure">
                      {city?.data.current.feelslike_c}
                    </p>
                  </li>
                  <li className="weather_details">
                    Humidity
                    <p className="weather_figure">
                      {city?.data.current.humidity}
                    </p>
                  </li>
                  <li className="weather_details">
                    Visibility (km)
                    <p className="weather_figure">
                      {city?.data.current.vis_km}
                    </p>
                  </li>
                  <li className="weather_details">
                    Wind Speed (kph)
                    <p className="weather_figure">
                      {city?.data.current.wind_kph}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="secondary_weather">
                <p className="forecast_temp">
                  Min. {forecast?.data.forecast.forecastday[0].day.mintemp_c}
                </p>
                <p className="forecast_temp">
                  Max. {forecast?.data.forecast.forecastday[0].day.maxtemp_c}
                </p>
              </div>
            </div>
          </div>
          <div className="grid2">
            <div className="hourly_forecast">
              <Line className="hourly_chart" data={data}></Line>
            </div>
            <div className="astro_container">
              <h2 className="astro_title">Astrology Guide</h2>
              <ul className="astro_list">
                <li className="astro_li">
                  Sunrise
                  <p className="astro_time">
                    {forecast?.data.forecast.forecastday[0].astro.sunrise}
                  </p>
                </li>
                <li className="astro_li">
                  Sunset
                  <p className="astro_time">
                    {forecast?.data.forecast.forecastday[0].astro.sunset}
                  </p>
                </li>
                <li className="astro_li">
                  Moonrise
                  <p className="astro_time">
                    {forecast?.data.forecast.forecastday[0].astro.moonrise}
                  </p>
                </li>
                <li className="astro_li">
                  Moonset
                  <p className="astro_time">
                    {forecast?.data.forecast.forecastday[0].astro.moonset}
                  </p>
                </li>
              </ul>
              <p className="moonphase">{`It's a ${forecast?.data.forecast.forecastday[0].astro.moon_phase} Day`}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
