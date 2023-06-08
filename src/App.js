import "./App.css";
import Favourites from "./components/Favourites";
import GlobalWeather from "./components/GlobalWeather";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home fetchUrl={requests.fetchKolkataWeather} />
          </Route>
          <Route exact path="/around_the_globe">
            <GlobalWeather fetchUrl={requests} />
          </Route>
          <Route exact path="/favourites">
            <Favourites />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
