import { useState } from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import translations from "../translations/language";

function Livestock({ language }) {

  const t = translations[language] || translations.English;

  const [animal, setAnimal] = useState("");

  const info = {

    "🐄 Cow": {
      food: "Green fodder + Mineral mixture",
      vaccine: "FMD Vaccine every 6 months",
      disease: "Mastitis"
    },

    "🐃 Buffalo": {
      food: "Dry fodder + Green grass",
      vaccine: "HS Vaccine yearly",
      disease: "Foot and Mouth Disease"
    },

    "🐐 Goat": {
      food: "Leaves + Concentrate Feed",
      vaccine: "PPR Vaccine",
      disease: "Goat Pox"
    },

    "🐓 Poultry": {
      food: "Starter Feed + Clean Water",
      vaccine: "Newcastle Disease Vaccine",
      disease: "Bird Flu"
    }

  };

  return (

    <div className="home">

      <Header language={language} />

      <div className="card">

        <h2>🐄 Livestock Assistant</h2>

        <p>Select your livestock</p>

        <select

          value={animal}

          onChange={(e)=>setAnimal(e.target.value)}

        >

          <option value="">Choose Animal</option>

          <option>🐄 Cow</option>

          <option>🐃 Buffalo</option>

          <option>🐐 Goat</option>

          <option>🐓 Poultry</option>

        </select>

      </div>

      {

        animal && (

          <div className="card">

            <h3>{animal}</h3>

            <p>

              🍽 <b>Feed:</b>

              {info[animal].food}

            </p>

            <p>

              💉 <b>Vaccination:</b>

              {info[animal].vaccine}

            </p>

            <p>

              🦠 <b>Common Disease:</b>

              {info[animal].disease}

            </p>

          </div>

        )

      }

      <BottomNav language={language} />

    </div>

  );

}

export default Livestock;