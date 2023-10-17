import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./Layout/Main/Main";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import FreeEpicGame from "./Pages/FreeEpicGame/FreeEpicGame";
import FreeGames from "./Pages/FreeGames/FreeGames";
import RandomDrinkMeal from "./Pages/RandomDrinkMeal/RandomDrinkMeal";
import CurrentWeather from "./Pages/CurrentWeather/CurrentWeather";
import Jokes from "./Pages/Jokes/Jokes";
import Market from "./Pages/Market/Market";

function App() {
  return (
    <div className={`app`}>
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/free-epic-game" element={<FreeEpicGame />} />
            <Route path="/free-games" element={<FreeGames />} />
            <Route path="/random-drink-meal" element={<RandomDrinkMeal />} />
            <Route path="/current-weather" element={<CurrentWeather />} />
            <Route path="/jokes" element={<Jokes />} />
            <Route path="/market" element={<Market />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
