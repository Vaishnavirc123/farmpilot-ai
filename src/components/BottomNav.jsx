import { Link } from "react-router-dom";
import translations from "../translations/language";
import "./BottomNav.css";

function BottomNav({ language = "English" }) {

  const text = translations[language] || translations.English;

  return (

    <div className="bottom-nav">

      <Link to="/">

        <span>🏠</span>

        <p>{text.home}</p>

      </Link>

      <Link to="/chat">

        <span>💬</span>

        <p>{text.chat}</p>

      </Link>

      <Link to="/planner">

        <span>📅</span>

        <p>{text.planner}</p>

      </Link>

      <Link to="/profile">

        <span>👤</span>

        <p>{text.profile}</p>

      </Link>

    </div>

  );

}

export default BottomNav;