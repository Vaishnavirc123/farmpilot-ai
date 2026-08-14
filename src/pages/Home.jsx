import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import LanguageBar from "../components/LanguageBar";
import CropSelector from "../components/CropSelector";
import BottomNav from "../components/BottomNav";

import translations from "../translations/language";

import "./Home.css";

function Home({

  language,
  setLanguage,

  selectedCrop,
  setSelectedCrop

}) {

  const navigate = useNavigate();

  const t = translations[language] || translations.English;

  return (

    <div className="home">

      <Header language={language} />

      <LanguageBar

        language={language}

        setLanguage={setLanguage}

      />

      <CropSelector

        language={language}

        selectedCrop={selectedCrop}

        setSelectedCrop={setSelectedCrop}

      />

      <div

        className="card"

        onClick={() => navigate("/weather")}

      >

        <h3>🌤 {t.weather}</h3>

        <h1>29°C</h1>

        <p>Bengaluru, Karnataka</p>

        <p>🌦 {t.rain}</p>

      </div>

      <div className="card">

        <h3>🌱 {t.myFarm}</h3>

        <p>

          <b>{t.crop}:</b> {selectedCrop}

        </p>

        <p>

          <b>{t.area}:</b> 3 Acres

        </p>

        <p>

          <b>{t.status}:</b> {t.healthy} 🌱

        </p>

      </div>

      <div className="card">

        <h3>🤖 {t.aiAdvice}</h3>

        <p>

          {t.adviceText}

        </p>

      </div>

      <h3>

        🚀 {t.whatNeed}

      </h3>

      <div className="quick-grid">

        <button onClick={() => navigate("/chat")}>

          <div style={{ fontSize: "30px" }}>💬</div>

          <div>{t.askAI}</div>

        </button>

        <button onClick={() => navigate("/cropdoctor")}>

          <div style={{ fontSize: "30px" }}>📷</div>

          <div>{t.cropDoctor}</div>

        </button>

        <button onClick={() => navigate("/calculator")}>

          <div style={{ fontSize: "30px" }}>💰</div>

          <div>{t.calculator}</div>

        </button>

        <button onClick={() => navigate("/dashboard")}>

          <div style={{ fontSize: "30px" }}>📊</div>

          <div>{t.dashboard}</div>

        </button>

        <button onClick={() => navigate("/diary")}>

          <div style={{ fontSize: "30px" }}>📖</div>

          <div>{t.cropDiary}</div>

        </button>

        <button onClick={() => navigate("/schemes")}>

          <div style={{ fontSize: "30px" }}>💸</div>

          <div>{t.schemes}</div>

        </button>

        <button onClick={() => navigate("/livestock")}>

          <div style={{ fontSize: "30px" }}>🐄</div>

          <div>{t.livestock}</div>

        </button>

        <button onClick={() => navigate("/marketplace")}>

          <div style={{ fontSize: "30px" }}>🌾</div>

          <div>{t.marketplace}</div>

        </button>

      </div>

      <BottomNav language={language} />

    </div>

  );

}

export default Home;
