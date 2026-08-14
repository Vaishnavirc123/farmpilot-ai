import "./WeatherCard.css";

function WeatherCard() {
  return (
    <div className="weather-card">

      <div className="weather-top">

        <div>
          <h3>🌤 Weather</h3>
          <p>Bengaluru</p>
        </div>

        <h1>29°C</h1>

      </div>

      <div className="weather-bottom">

        <div>
          <span>💧</span>
          <p>72%</p>
          <small>Humidity</small>
        </div>

        <div>
          <span>🌬</span>
          <p>8 km/h</p>
          <small>Wind</small>
        </div>

        <div>
          <span>🌧</span>
          <p>80%</p>
          <small>Rain</small>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;