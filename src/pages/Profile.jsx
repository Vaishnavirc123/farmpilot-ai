import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import translations from "../translations/language";

function Profile({ language, selectedCrop }) {

  const t = translations[language] || translations.English;

  return (

    <div className="home">

      <Header language={language} />

      <div className="card">

        <h2>👤 {t.profile}</h2>

        <p><b>👨 Farmer:</b> KCVM Guntallu</p>

        <p><b>📍 Location:</b> Bengaluru</p>

        <p><b>🌾 {t.crop}:</b> {selectedCrop}</p>

        <p><b>📞 Mobile:</b> +91 9876543210</p>

        <p><b>🌐 {t.language}:</b> {language}</p>

      </div>

      {/* Logout */}

      <div className="card">

        <button
          className="setting-btn"
          style={{
            width: "100%",
            background: "#e53935",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          🚪 Logout
        </button>

      </div>

      <BottomNav language={language} />

    </div>

  );

}

export default Profile;