import { useState } from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import translations from "../translations/language";

function CropDiary({ language }) {

  const t = translations[language] || translations.English;

  const [crop, setCrop] = useState("");
  const [date, setDate] = useState("");
  const [diary, setDiary] = useState([]);

  function addEntry() {

    if (!crop || !date) {
      alert("Please fill all fields");
      return;
    }

    setDiary([
      ...diary,
      {
        crop,
        date
      }
    ]);

    setCrop("");
    setDate("");

  }

  return (

    <div className="home">

      <Header language={language} />

      <div className="card">

        <h2>📖 Crop Diary</h2>

        <label>🌾 Crop</label>

        <input
          type="text"
          placeholder="Enter Crop Name"
          value={crop}
          onChange={(e)=>setCrop(e.target.value)}
        />

        <br /><br />

        <label>📅 Planting Date</label>

        <input
          type="date"
          value={date}
          onChange={(e)=>setDate(e.target.value)}
        />

        <br /><br />

        <button onClick={addEntry}>
          ➕ Add Entry
        </button>

      </div>

      <div className="card">

        <h3>🌱 My Crop Records</h3>

        {

          diary.length===0

          ?

          <p>No records added.</p>

          :

          diary.map((item,index)=>(

            <div
              key={index}
              style={{
                borderBottom:"1px solid #ddd",
                padding:"10px 0"
              }}
            >

              <h4>{item.crop}</h4>

              <p>🌱 Planted: {item.date}</p>

              <p>💧 Next Watering: Every 3 Days</p>

              <p>🌾 Fertilizer: After 15 Days</p>

            </div>

          ))

        }

      </div>

      <BottomNav language={language} />

    </div>

  );

}

export default CropDiary;