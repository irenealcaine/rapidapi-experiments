import "./CurrentWeather.scss";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../Context/darkModeContext";
import axios from "axios";


// https://www.meteosource.com/documentation
// https://rapidapi.com/MeteosourceWeather/api/ai-weather-by-meteosource

const Page4 = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [currentWeather, setCurrentWeather] = useState({})

  const exampleData = {
    lat: "39.69951N",
    lon: "0.70868W",
    elevation: 314,
    timezone: "Europe/Madrid",
    units: "metric",
    current: {
      icon: "overcast",
      icon_num: 7,
      summary: "Nublado",
      temperature: 17.8,
      feels_like: 16.5,
      wind_chill: 17.5,
      dew_point: 16.5,
      wind: {
        speed: 0,
        gusts: 2.2,
        angle: 291,
        dir: "ONO",
      },
      precipitation: {
        total: 0,
        type: "none",
      },
      cloud_cover: 99,
      ozone: 284.69,
      pressure: 1013,
      uv_index: 0,
      humidity: 89,
      visibility: 14.1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_URL_WEATHER, {
          params: {
            lat: '39.69951',
            lon: '-0.70868',
            timezone: 'auto',
            language: 'en',
            units: 'metric'
          },
          headers: {
            "X-RapidAPI-Host": process.env.REACT_APP_WEATHER_HOST,
            "X-RapidAPI-Key": process.env.REACT_APP_TU_RAPIDAPI_KEY,
          },

        });

        setCurrentWeather(response.data);
        console.log(currentWeather.current)
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="current-weather">
      <h1>Current Weather</h1>
      <div className="weather-heading">
        <h2 className={darkMode ? "dark" : ""}>
          {/* {exampleData.current.summary} */}
          {currentWeather?.current?.summary}
        </h2>
        {currentWeather?.current?.icon_num && <div className="images">
          <img
            src={require(
              `../../Assets/Images/weather/${currentWeather?.current?.icon_num}.png`,
            )}
            alt="weather logo"
          />
          <img
            src={require(
              `../../Assets/Images/weather/${currentWeather?.current?.icon_num}.png`,
            )}
            alt="weather logo"
          />
          <img
            src={require(
              `../../Assets/Images/weather/${currentWeather?.current?.icon_num}.png`,
            )}
            alt="weather logo"
          />
        </div>}
      </div>
      <div className={`weather-content ${darkMode ? "dark" : ""}`}>
        <div className="temperature">
          <h3>Temperature</h3>
          <p>{currentWeather?.current?.temperature} ºC</p>
          {/* <p>{exampleData.current.temperature} ºC</p> */}
        </div>
        <div className="wind">
          <h3>Wind</h3>
          <p>
            {currentWeather?.current?.wind?.speed} km/h,{" "}
            {currentWeather?.current?.wind?.dir}
          </p>
          {/* <p>
            {exampleData.current.wind.speed} km/h,{" "}
            {exampleData.current.wind.dir}
          </p> */}
        </div>
        <div className="precipitation">
          <h3>Precipitation</h3>
          <p>{currentWeather?.current?.precipitation?.total} mm</p>
          {/* <p>{exampleData.current.precipitation.total} mm</p> */}
        </div>
        <div className="humidity">
          <h3>Humidity</h3>
          <p>{currentWeather?.current?.humidity} %</p>
          {/* <p>{exampleData.current.humidity} %</p> */}
        </div>
      </div>
    </div>
  );
};

export default Page4;
