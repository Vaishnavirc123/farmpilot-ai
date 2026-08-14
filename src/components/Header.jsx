import "./Header.css";
import translations from "../translations/language";

function Header({ language = "English" }) {

  const t = translations[language] || translations.English;

  return (

    <header className="header">

      <div className="logo">
        🌾 FarmPilot.ai
      </div>

      <div className="welcome">

        <h2>
          {t.greeting} 👋
        </h2>

        <p>
          📍 Bengaluru, Karnataka
        </p>

      </div>

    </header>

  );

}

export default Header;