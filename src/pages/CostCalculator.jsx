import { useState } from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import translations from "../translations/language";

function CostCalculator({ language }) {

  const t = translations[language] || translations.English;

  const [crop, setCrop] = useState("🌾 Wheat");
  const [acres, setAcres] = useState("");
  const [result, setResult] = useState(null);

  function calculateCost() {

    const area = parseFloat(acres);

    if (!area || area <= 0) {
      alert("Please enter valid acres.");
      return;
    }

    let urea = 2 * area;
    let dap = 1.5 * area;
    let potash = 1 * area;

    let cost =
      urea * 900 +
      dap * 1400 +
      potash * 1200;

    setResult({

      urea: Math.ceil(urea),

      dap: Math.ceil(dap),

      potash: Math.ceil(potash),

      cost: Math.round(cost)

    });

  }

  return (

    <div className="home">

      <Header language={language} />

      <div className="card">

        <h2>💰 Cost Calculator</h2>

        <label>🌾 Crop</label>

        <select

          value={crop}

          onChange={(e) => setCrop(e.target.value)}

        >

          <option>🌾 Wheat</option>

          <option>🌾 Rice</option>

          <option>🌽 Maize</option>

          <option>🍅 Tomato</option>

        </select>

        <br /><br />

        <label>🌱 Land (Acres)</label>

        <input

          type="number"

          placeholder="Enter Acres"

          value={acres}

          onChange={(e) => setAcres(e.target.value)}

        />

        <br /><br />

        <button

          onClick={calculateCost}

        >

          Calculate

        </button>

      </div>

      {

        result && (

          <div className="card">

            <h3>🌱 Recommendation</h3>

            <p>🌾 Crop : {crop}</p>

            <p>🧪 Urea : {result.urea} Bags</p>

            <p>🌱 DAP : {result.dap} Bags</p>

            <p>🥬 Potash : {result.potash} Bags</p>

            <hr />

            <h2>

              Estimated Cost

            </h2>

            <h1>

              ₹ {result.cost}

            </h1>

          </div>

        )

      }

      <BottomNav language={language} />

    </div>

  );

}

export default CostCalculator;