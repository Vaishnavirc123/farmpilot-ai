import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import translations from "../translations/language";

function Weather({ language }) {

  const t = translations[language] || translations.English;

  return (

    <div className="home">

      <Header language={language} />

      <div className="card">

        <h2>🌤 {t.weather}</h2>

        <h1>29°C</h1>

        <h3>📍 Bengaluru, Karnataka</h3>

        <p>💧 Humidity : 72%</p>

        <p>💨 Wind : 10 km/h</p>

        <p>☀️ UV Index : Moderate</p>

      </div>

      <div className="card">

        <h3>🌦 Forecast</h3>

        <p>Today : Sunny ☀️</p>

        <p>Tomorrow : Rain Expected 🌧️</p>

        <p>Day After : Cloudy ☁️</p>

      </div>

      <div className="card">

        <h3>🤖 AI Recommendation</h3>

        <p>

          🌧 Rain is expected tomorrow.

          Complete irrigation today.

          Avoid spraying pesticides before rain.

        </p>

      </div>

      <BottomNav language={language} />

    </div>

  );

}

export default Weather;