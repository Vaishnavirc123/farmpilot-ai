import { useState } from "react";

import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

import translations from "../translations/language";

import { analyzeCropImage } from "../services/gemini";

function CropDoctor({ language }) {

  const t = translations[language] || translations.English;

  const [image, setImage] = useState(null);

  const [result, setResult] = useState(
    "Upload an image to begin crop disease analysis."
  );

  const [loading, setLoading] = useState(false);

  async function handleImage(e) {

    const file = e.target.files[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));

    setLoading(true);

    setResult("🔍 AI is analyzing your crop...");

    try {

      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = async () => {

        const base64 = reader.result.split(",")[1];

        const response = await analyzeCropImage(

          base64,

          file.type

        );

        setResult(response);

        setLoading(false);

      };

    } catch (error) {

      console.error(error);

      setResult("❌ Failed to analyze image.");

      setLoading(false);

    }

  }

  return (

    <div className="home">

      <Header language={language} />

      <div className="card">

        <h2>📷 {t.cropDoctor}</h2>

        <p>Upload a crop image for disease detection.</p>

        <input

          type="file"

          accept="image/*"

          onChange={handleImage}

        />

        <br /><br />

        {

          image && (

            <img

              src={image}

              alt="Crop"

              style={{

                width: "100%",

                borderRadius: "12px"

              }}

            />

          )

        }

      </div>

      <div className="card">

        <h3>🤖 AI Result</h3>

        {

          loading

          ?

          <p>Analyzing image...</p>

          :

          <pre
            style={{
              whiteSpace: "pre-wrap",
              fontFamily: "inherit"
            }}
          >
            {result}
          </pre>

        }

      </div>

      <BottomNav language={language} />

    </div>

  );

}

export default CropDoctor;