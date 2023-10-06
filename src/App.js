import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./Layout/Main/Main";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import FreeEpicGame from "./Pages/FreeEpicGame/FreeEpicGame";
import FreeGames from "./Pages/FreeGames/FreeGames";
import Page3 from "./Pages/Page3/Page3";
import Page4 from "./Pages/Page4/Page4";

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
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
