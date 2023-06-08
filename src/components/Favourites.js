import React from "react";
import requests from "../requests";
import Card from "./Card";
import "./Favourites.css";

const Favourites = () => {
  return (
    <>
      <div className="favs">
        <h1 className="header_favs">My Watchlist</h1>
      </div>
      <div className="container-favs">
        <Card fetchUrl={requests.fetchKolkataWeather} />
        <Card fetchUrl={requests.fetchDelhiWeather} />
        <Card fetchUrl={requests.fetchLondonWeather} />
        <Card fetchUrl={requests.fetchLAWeather} />
        <Card fetchUrl={requests.fetchGuwuhatiWeather} />
        <Card fetchUrl={requests.fetchMumbaiWeather} />
        <Card fetchUrl={requests.fetchTorontoWeather} />
        <Card fetchUrl={requests.fetchBangaloreWeather} />
        <Card fetchUrl={requests.fetchFaroeWeather} />
      </div>
    </>
  );
};

export default Favourites;
