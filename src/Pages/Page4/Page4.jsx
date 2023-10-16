import "./Page4.scss";

// https://www.meteosource.com/documentation
// https://rapidapi.com/MeteosourceWeather/api/ai-weather-by-meteosource

const Page4 = () => {
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
  console.log(exampleData);

  return (
    <div className="page4">
      <h1>Curent Weather</h1>
      <h2>{exampleData.current.summary}</h2>
      <img
        src={require(
          `../../Assets/Images/weather/${exampleData.current.icon_num}.png`,
        )}
        alt="weather logo"
      />
      <h3>Temperature</h3>
      <p>{exampleData.current.temperature} ºC</p>
      <h3>Wind</h3>
      <p>
        {exampleData.current.wind.speed} km/h, {exampleData.current.wind.dir}
      </p>
      <h3>Precipitation</h3>
      <p>{exampleData.current.precipitation.total} mm</p>
      <h3>Humidity</h3>
      <p>{exampleData.current.humidity} %</p>
    </div>
  );
};

export default Page4;
