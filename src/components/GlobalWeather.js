import React from "react";
import requests from "../requests";
import ListItem from "./ListItem";
import "./GlobalWeather.css";

const GlobalWeather = () => {
  return (
    <>
      <h1 className="list_header">Global Glance</h1>
      <div className="list_container">
        <div className="list_one_container">
          <ul className="list_1">
            <ListItem fetchUrl={requests.fetchNewYorkWeather} />
            <ListItem fetchUrl={requests.fetchMumbaiWeather} />
            <ListItem fetchUrl={requests.fetchBeijingWeather} />
            <ListItem fetchUrl={requests.fetchMunichWeather} />
            <ListItem fetchUrl={requests.fetchLAWeather} />
            <ListItem fetchUrl={requests.fetchMoscowWeather} />
            <ListItem fetchUrl={requests.fetchMadridWeather} />
            <ListItem fetchUrl={requests.fetchTijuanaWather} />
            <ListItem fetchUrl={requests.fetchSydneyWeather} />
            <ListItem fetchUrl={requests.fetchSingaporeWeather} />
            <ListItem fetchUrl={requests.fetchParisWeather} />
            <ListItem fetchUrl={requests.fetchMelbourneWeather} />
            <ListItem fetchUrl={requests.fetchMexicoWeather} />
            <ListItem fetchUrl={requests.fetchNairobiWeather} />
            <ListItem fetchUrl={requests.fetchShanghaiWeather} />
            <ListItem fetchUrl={requests.fetchLagosWeather} />
          </ul>
        </div>
        <div className="list_two_container">
          <ul className="list_2">
            <ListItem fetchUrl={requests.fetchFaroeWeather} />
            <ListItem fetchUrl={requests.fetchLondonWeather} />
            <ListItem fetchUrl={requests.fetchTokyoWeather} />
            <ListItem fetchUrl={requests.fetchMadeiraWeather} />
            <ListItem fetchUrl={requests.fetchGlasgowWeather} />
            <ListItem fetchUrl={requests.fetchDelhiWeather} />
            <ListItem fetchUrl={requests.fetchRioWeather} />
            <ListItem fetchUrl={requests.fetchBerlinWeather} />
            <ListItem fetchUrl={requests.fetchBangaloreWeather} />
            <ListItem fetchUrl={requests.fetchCapeTownWeather} />
            <ListItem fetchUrl={requests.fetchBangkokWeather} />
            <ListItem fetchUrl={requests.fetchCairoWeather} />
            <ListItem fetchUrl={requests.fetchZurichWeather} />
            <ListItem fetchUrl={requests.fetchAucklandWeather} />
            <ListItem fetchUrl={requests.fetchChicagoWeather} />
            <ListItem fetchUrl={requests.fetchRomeWeather} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default GlobalWeather;
