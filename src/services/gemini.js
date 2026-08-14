const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const TEXT_URL =
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

// ===============================
// Chat with Gemini
// ===============================

export async function askGemini(question) {

  try {

    const response = await fetch(TEXT_URL, {

      method: "POST",

      headers: {

        "Content-Type": "application/json"

      },

      body: JSON.stringify({

        contents: [

          {

            parts: [

              {

                text: `You are FarmPilot AI.

You are an agriculture expert.

Rules:

1. Reply in the SAME language used by the farmer.

2. Keep the answer short and practical.

3. Recommend fertilizers and pesticides whenever needed.

4. Mention approximate Indian prices whenever possible.

Question:

${question}`

              }

            ]

          }

        ]

      })

    });

    const data = await response.json();

    return (

      data.candidates?.[0]?.content?.parts?.[0]?.text ||

      "Sorry, I couldn't answer."

    );

  }

  catch (error) {

    console.log(error);

    return "Unable to connect to FarmPilot AI.";

  }

}

// ===============================
// Crop Image Analysis (Demo)
// ===============================

export async function analyzeCropImage(file) {

  const fileName = file?.name?.toLowerCase() || "";

  if (fileName.includes("tomato")) {

    return `🍅 Crop Analysis

Crop:
Tomato

Disease:
Early Blight

Confidence:
95%

Cause:
Fungal infection.

Recommendation:

• Remove infected leaves.

• Spray Mancozeb 75WP.

• Improve air circulation.

💰 Recommended Pesticides

• Mancozeb 75WP - ₹220

• Copper Oxychloride - ₹185`;

  }

  if (

    fileName.includes("rice") ||

    fileName.includes("paddy")

  ) {

    return `🌾 Crop Analysis

Crop:
Rice

Disease:
Blast Disease

Confidence:
94%

Recommendation:

• Spray Tricyclazole.

• Reduce excess nitrogen.

💰 Recommended Pesticide

• Tricyclazole - ₹390`;

  }

  if (fileName.includes("cotton")) {

    return `🌿 Crop Analysis

Crop:
Cotton

Disease:
Bollworm Attack

Confidence:
96%

Recommendation:

• Spray Emamectin Benzoate.

💰 Recommended Pesticide

• Emamectin Benzoate - ₹450`;

  }

  if (fileName.includes("maize")) {

    return `🌽 Crop Analysis

Crop:
Maize

Disease:
Fall Armyworm

Confidence:
93%

Recommendation:

• Spray Spinosad.

💰 Recommended Pesticide

• Spinosad - ₹520`;

  }

  return `🌾 Crop Analysis

Crop:
Wheat

Disease:
Leaf Rust

Confidence:
96%

Cause:
Fungal infection.

Recommendation:

• Remove infected leaves.

• Spray Mancozeb 75WP.

• Avoid overwatering.

💰 Recommended Pesticides

• Mancozeb 75WP - ₹220

• Copper Oxychloride - ₹185

• SAAF Fungicide - ₹310

🌱 Prevention

• Use certified seeds.

• Maintain field hygiene.

• Monitor crops regularly.`;

}