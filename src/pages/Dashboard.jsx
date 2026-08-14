import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import translations from "../translations/language";

function Dashboard({ language }) {

  const t = translations[language] || translations.English;

  return (

    <div className="home">

      <Header language={language} />

      <div className="card">

        <h2>📊 Farm Dashboard</h2>

        <p>Your Farm Overview</p>

      </div>

      <div className="card">

        <h3>🌾 Current Crop</h3>

        <h2>🌾 Wheat</h2>

      </div>

      <div className="card">

        <h3>🌤 Weather</h3>

        <h2>29°C</h2>

        <p>Rain Expected Tomorrow 🌧</p>

      </div>

      <div className="card">

        <h3>💰 Estimated Income</h3>

        <h1>₹1,25,000</h1>

      </div>

      <div className="card">

        <h3>🧪 Fertilizer Used</h3>

        <h2>12 Bags</h2>

      </div>

      <div className="card">

        <h3>💧 Next Irrigation</h3>

        <h2>Tomorrow</h2>

      </div>

      <div className="card">

        <h3>📈 Farm Health</h3>

        <h1 style={{color:"green"}}>

          92%

        </h1>

      </div>

      <div className="card">

        <h3>🤖 AI Status</h3>

        <h2 style={{color:"green"}}>

          Active ✅

        </h2>

      </div>

      <BottomNav language={language} />

    </div>

  );

}

export default Dashboard;