import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import translations from "../translations/language";

function Planner({

  language,
  selectedCrop

}) {

  const t = translations[language] || translations.English;

  return (

    <div className="home">

      <Header language={language} />

      <div className="card">

        <h2>📅 {t.planner}</h2>

        <p><b>{t.crop}:</b> {selectedCrop}</p>

      </div>

      <div className="card">

        <h3>🌱 Weekly Farm Schedule</h3>

        <ul>

          <li>🌾 Monday - Irrigation</li>

          <li>🌿 Tuesday - Weed Removal</li>

          <li>🧪 Wednesday - Fertilizer</li>

          <li>🐛 Thursday - Pest Inspection</li>

          <li>🌾 Friday - Crop Monitoring</li>

          <li>🚜 Saturday - Soil Check</li>

          <li>☀ Sunday - Farm Rest</li>

        </ul>

      </div>

      <BottomNav language={language} />

    </div>

  );

}

export default Planner;