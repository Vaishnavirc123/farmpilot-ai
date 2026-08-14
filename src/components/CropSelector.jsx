import { useState } from "react";
import translations from "../translations/language";
import "./CropSelector.css";

function CropSelector({

  language = "English",

  selectedCrop,

  setSelectedCrop

}) {

  const [search, setSearch] = useState("");

  const t = translations[language] || translations.English;

  const crops = [

    "🌾 Wheat",
    "🌾 Rice",
    "🌽 Maize",
    "🍅 Tomato",
    "🥔 Potato",
    "🧅 Onion",
    "🌶️ Green Chilli",
    "🥕 Carrot",
    "🥒 Cucumber",
    "🍆 Brinjal",
    "🥬 Cabbage",
    "🥦 Cauliflower",
    "🌻 Sunflower",
    "🥜 Groundnut",
    "🌿 Cotton",
    "🌾 Sugarcane",
    "🥭 Mango",
    "🍌 Banana",
    "🍎 Apple",
    "🍇 Grapes",
    "🥥 Coconut"

  ];

  const filteredCrops = crops.filter((crop) =>
    crop.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="crop-selector">

      <h3>
        🌱 {t.selectCrop}
      </h3>

      <input

        type="text"

        placeholder={t.searchCrop}

        value={search}

        onChange={(e) => setSearch(e.target.value)}

        className="crop-search"

      />

      <select

        value={selectedCrop}

        onChange={(e) => setSelectedCrop(e.target.value)}

        className="crop-dropdown"

      >

        {

          filteredCrops.map((crop) => (

            <option

              key={crop}

              value={crop}

            >

              {crop}

            </option>

          ))

        }

      </select>

    </div>

  );

}

export default CropSelector;