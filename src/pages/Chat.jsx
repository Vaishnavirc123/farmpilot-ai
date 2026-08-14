import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

function Chat({ language }) {

  const [message, setMessage] = useState("");

  const [typing, setTyping] = useState(false);

  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);

  const bottomRef = useRef(null);

  const quickQuestions = [

    "How many bags can wheat give?",

    "Best fertilizer for wheat",

    "How much water is needed?",

    "Why are my leaves yellow?",

    "Weather today",

    "Rice farming tips",

    "Tomato disease",

    "Cotton pest control",

    "Market price",

    "Harvest time"

  ];

  const [chat, setChat] = useState([

    {

      sender: "ai",

      text:
`🙏 Welcome to FarmPilot AI

I can help you with:

🌾 Crop Diseases

🌱 Fertilizer Advice

💧 Irrigation

🌦 Weather

🐛 Pest Control

🚜 Harvesting

💰 Market Prices

Ask me anything...`,

      time: new Date().toLocaleTimeString([], {

        hour: "2-digit",

        minute: "2-digit"

      })

    }

  ]);

  useEffect(() => {

    bottomRef.current?.scrollIntoView({

      behavior: "smooth"

    });

  }, [chat]);

  function askQuickQuestion(question) {

    setMessage(question);

  }
  function speak(text) {

    const speech = new SpeechSynthesisUtterance(text);

    if (language === "తెలుగు") {

      speech.lang = "te-IN";

    }

    else if (language === "हिंदी") {

      speech.lang = "hi-IN";

    }

    else if (language === "ಕನ್ನಡ") {

      speech.lang = "kn-IN";

    }

    else if (language === "தமிழ்") {

      speech.lang = "ta-IN";

    }

    else if (language === "മലയാളം") {

      speech.lang = "ml-IN";

    }

    else {

      speech.lang = "en-IN";

    }

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);

  }

  function startListening() {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

      alert("Speech Recognition is not supported on this browser.");

      return;

    }

    const recognition = new SpeechRecognition();

    recognition.lang =
      language === "తెలుగు"
        ? "te-IN"
        : language === "हिंदी"
        ? "hi-IN"
        : language === "ಕನ್ನಡ"
        ? "kn-IN"
        : language === "தமிழ்"
        ? "ta-IN"
        : language === "മലയാളം"
        ? "ml-IN"
        : "en-IN";

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;

    recognition.onstart = () => {

      setListening(true);

    };

    recognition.onend = () => {

      setListening(false);

    };

    recognition.onerror = () => {

      setListening(false);

    };

    recognition.onresult = (event) => {

      const text = event.results[0][0].transcript;

      setMessage(text);

    };

    recognitionRef.current = recognition;

    recognition.start();

  }

  function uploadImage(e) {

    const file = e.target.files[0];

    if (!file) return;

    const imageURL = URL.createObjectURL(file);

    const fileName = file.name.toLowerCase();

    let report = "";

    if (fileName.includes("tomato")) {

      report =
`🍅 Crop Analysis

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

• Copper Oxychloride - ₹185

🌱 Prevention

• Avoid overhead watering.

• Maintain field hygiene.`;

    }

    else if (
      fileName.includes("rice") ||
      fileName.includes("paddy")
    ) {

      report =
`🌾 Crop Analysis

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

    else if (
      fileName.includes("cotton")
    ) {

      report =
`🌿 Crop Analysis

Crop:
Cotton

Disease:
Bollworm Attack

Confidence:
96%

Recommendation:

• Spray Emamectin Benzoate.

💰 Recommended Pesticide

• Emamectin - ₹450`;

    }

    else if (
      fileName.includes("maize")
    ) {

      report =
`🌽 Crop Analysis

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

    else {

      report =
`🌾 Crop Analysis

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

• Maintain field hygiene.`;

    }

    setChat(prev => [

      ...prev,

      {

        sender: "user",

        image: imageURL,

        time: new Date().toLocaleTimeString([], {

          hour: "2-digit",

          minute: "2-digit"

        })

      },

      {

        sender: "ai",

        text: report,

        time: new Date().toLocaleTimeString([], {

          hour: "2-digit",

          minute: "2-digit"

        })

      }

    ]);

    speak(report);

  }
  function sendMessage() {

    if (message.trim() === "") return;

    const q = message.toLowerCase();

    let reply = "";

    // Wheat Yield
    if (q.includes("how many bags") && q.includes("wheat")) {

      reply =
`🌾 Wheat Yield

Average production:

• 18–25 bags per acre

One bag ≈ 50 kg

With good irrigation and fertilizer, the yield can be even higher.`;

    }

    // Wheat Fertilizer
    else if (q.includes("fertilizer") && q.includes("wheat")) {

      reply =
`🌱 Wheat Fertilizer

• DAP during sowing

• Urea after 25–30 days

• Potash if required

Always follow soil test recommendations.`;

    }

    // Water
    else if (q.includes("water")) {

      reply =
`💧 Irrigation Advice

Water every 15–20 days.

Avoid waterlogging.

Morning irrigation is recommended.`;

    }

    // Rain
    else if (q.includes("rain")) {

      reply =
`🌧 Weather Advice

Rain is expected tomorrow.

Avoid spraying pesticides today.

Complete irrigation before rainfall.`;

    }

    // Rice
    else if (q.includes("rice") || q.includes("paddy")) {

      reply =
`🌾 Rice Farming Tips

• Use certified seeds.

• Maintain 2–5 cm water level.

• Apply fertilizer in three stages.

Harvest after grains become golden yellow.`;

    }

    // Tomato
    else if (q.includes("tomato")) {

      reply =
`🍅 Tomato Farming

• Use drip irrigation.

• Spray neem oil every 15 days.

• Remove infected leaves immediately.`;

    }

    // Cotton
    else if (q.includes("cotton")) {

      reply =
`🌿 Cotton Crop

Monitor bollworm regularly.

Install pheromone traps.

Use recommended pesticides only if required.`;

    }

    // Maize
    else if (q.includes("maize")) {

      reply =
`🌽 Maize Farming

Apply nitrogen fertilizer in split doses.

Harvest when kernels become hard and dry.`;

    }

    // Market Price
    else if (q.includes("market")) {

      reply =
`💰 Market Price

🌾 Wheat : ₹2450 / Quintal

🌾 Rice : ₹2320 / Quintal

🌽 Maize : ₹2140 / Quintal

(Example demo prices)`;

    }

    // Harvest
    else if (q.includes("harvest")) {

      reply =
`🚜 Harvest Advice

Harvest when grains become hard.

Crop should turn golden yellow.

Avoid harvesting immediately after rain.`;

    }

    // Yellow Leaves
    else if (q.includes("yellow")) {

      reply =
`🍂 Yellow Leaves

Possible reasons:

• Nitrogen deficiency

• Excess watering

• Disease infection

Check soil nutrients before applying fertilizer.`;

    }

    // Disease
    else if (q.includes("disease")) {

      reply =
`🌿 Disease Advice

Upload a crop image.

FarmPilot AI will identify the disease and recommend treatment.`;

    }

    // Pesticide
    else if (q.includes("pesticide")) {

      reply =
`🧴 Recommended Pesticides

• Mancozeb 75WP

₹220

• Copper Oxychloride

₹185

• Neem Oil

₹180`;

    }

    // Weather
    else if (q.includes("weather")) {

      reply =
`🌤 Today's Weather

Temperature : 29°C

Humidity : 68%

Rain expected tomorrow.

Ideal day for field inspection.`;

    }

    // Soil
    else if (q.includes("soil")) {

      reply =
`🌱 Soil Health

pH : 6.8

Moisture : Good

Organic Carbon : Medium

Suitable for wheat cultivation.`;

    }

    // Default
    else {

      reply =
`🌾 FarmPilot AI

I understood your question.

This project currently contains demo farming knowledge.

More AI-powered answers can be added later.`;

    }

    setChat(prev => [

      ...prev,

      {

        sender: "user",

        text: message,

        time: new Date().toLocaleTimeString([], {

          hour: "2-digit",

          minute: "2-digit"

        })

      }

    ]);

    setMessage("");

    setTyping(true);

    setTimeout(() => {

      setTyping(false);

      setChat(prev => [

        ...prev,

        {

          sender: "ai",

          text: reply,

          time: new Date().toLocaleTimeString([], {

            hour: "2-digit",

            minute: "2-digit"

          })

        }

      ]);

      speak(reply);

    }, 1000);

  }
  return (

    <div
      className="home"
      style={{
        paddingBottom: "120px"
      }}
    >

      <Header language={language} />

      <div className="card">

        <h2>💬 FarmPilot AI Chat</h2>

        {/* Weather Alert */}

        <div
          style={{
            background: "#FFF3CD",
            padding: "12px",
            borderRadius: "10px",
            marginTop: "15px",
            marginBottom: "15px"
          }}
        >

          ⚠ Heavy rain expected tomorrow.

          Avoid spraying pesticides today.

        </div>

        {/* AI Suggestion */}

        <div
          style={{
            background: "#E8F5E9",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "15px"
          }}
        >

          <b>💡 AI Suggestion</b>

          <p>

            Check soil moisture before applying fertilizer.

          </p>

        </div>

        {/* Daily Tip */}

        <div
          style={{
            background: "#E3F2FD",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        >

          🌱 Today's Farming Tip

          <br /><br />

          Rotate crops every season to improve soil fertility.

        </div>

        {/* Chat Area */}

        <div
          style={{
            minHeight: "420px",
            maxHeight: "420px",
            overflowY: "auto",
            paddingRight: "8px"
          }}
        >

          {

            chat.map((item, index) => (

              <div

                key={index}

                style={{

                  textAlign:

                    item.sender === "user"

                      ? "right"

                      : "left",

                  marginBottom: "15px"

                }}

              >

                {

                  item.image ?

                  <img

                    src={item.image}

                    alt="crop"

                    style={{

                      width: "180px",

                      borderRadius: "12px"

                    }}

                  />

                  :

                  <div

                    style={{

                      display: "inline-block",

                      background:

                        item.sender === "user"

                          ? "#DCF8C6"

                          : "#FFFFFF",

                      color: "#000",

                      padding: "12px",

                      borderRadius: "18px",

                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",

                      maxWidth: "85%",

                      whiteSpace: "pre-wrap"

                    }}

                  >

                    <div>

                      {item.text}

                    </div>

                    <div

                      style={{

                        fontSize: "11px",

                        marginTop: "8px",

                        opacity: 0.7,

                        textAlign: "right"

                      }}

                    >

                      {item.time}

                    </div>

                  </div>

                }

              </div>

            ))

          }

          {

            typing &&

            <div

              style={{

                background: "#FFFFFF",

                padding: "12px",

                borderRadius: "18px",

                width: "190px",

                marginBottom: "15px"

              }}

            >

              🤖 FarmPilot AI is typing...

            </div>

          }

          <div ref={bottomRef}></div>

        </div>
        {/* Quick Questions */}

        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "10px",
            marginTop: "20px",
            marginBottom: "15px"
          }}
        >

          {

            quickQuestions.map((item, index) => (

              <button

                key={index}

                onClick={() => askQuickQuestion(item)}

                style={{

                  whiteSpace: "nowrap",

                  background: "#2e7d32",

                  color: "white",

                  border: "none",

                  borderRadius: "20px",

                  padding: "8px 14px",

                  cursor: "pointer",

                  fontSize: "13px"

                }}

              >

                {item}

              </button>

            ))

          }

        </div>

        {/* Input Box */}

        <input

          type="text"

          placeholder="Ask your farming question..."

          value={message}

          onChange={(e) => setMessage(e.target.value)}

          onKeyDown={(e) => {

            if (e.key === "Enter") {

              sendMessage();

            }

          }}

          style={{

            width: "100%",

            padding: "14px",

            borderRadius: "12px",

            border: "1px solid #ccc",

            outline: "none",

            fontSize: "15px",

            boxSizing: "border-box"

          }}

        />

        {/* Bottom Controls */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginTop: "15px"
          }}
        >

          {/* Image Upload */}

          <label
            style={{
              fontSize: "28px",
              cursor: "pointer"
            }}
          >
            📷
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={uploadImage}
            />
          </label>

          {/* Microphone */}

          <button
            onClick={startListening}
            style={{
              background: "transparent",
              border: "none",
              fontSize: "28px",
              cursor: "pointer"
            }}
          >
            {listening ? "🔴" : "🎤"}
          </button>

          {/* Send */}

          <button
            onClick={sendMessage}
            style={{
              marginLeft: "auto",
              background: "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: "10px",
              padding: "10px 22px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "15px"
            }}
          >
            Send
          </button>

        </div>

      </div>

      {/* Extra AI Tools */}

      <div
        style={{
          marginTop: "25px"
        }}
      >

        <h3>🤖 AI Tools</h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "12px",
            marginTop: "15px"
          }}
        >

          <button
            onClick={() => speak(chat[chat.length - 1]?.text || "")}
            style={{
              background: "#4CAF50",
              color: "white",
              border: "none",
              padding: "12px",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            🔊 Listen
          </button>

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                chat[chat.length - 1]?.text || ""
              );
              alert("Copied!");
            }}
            style={{
              background: "#2196F3",
              color: "white",
              border: "none",
              padding: "12px",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            📋 Copy
          </button>

          <button
            onClick={() => alert("👍 Thanks for your feedback!")}
            style={{
              background: "#8BC34A",
              color: "white",
              border: "none",
              padding: "12px",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            👍 Helpful
          </button>

          <button
            onClick={() => alert("👎 Feedback recorded.")}
            style={{
              background: "#F44336",
              color: "white",
              border: "none",
              padding: "12px",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            👎 Not Helpful
          </button>

        </div>

      </div>

      {/* Download Chat */}

      <div
        style={{
          marginTop: "25px"
        }}
      >

        <button
          onClick={() => {

            const text = chat
              .map(item =>
                `${item.sender.toUpperCase()}

${item.text || "[Image]"}

----------------`
              )
              .join("\n");

            const blob = new Blob([text], {
              type: "text/plain"
            });

            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");

            a.href = url;

            a.download = "FarmPilotChat.txt";

            a.click();

          }}
          style={{
            width: "100%",
            background: "#673AB7",
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          📄 Download Chat Report
        </button>

      </div>

      {/* Footer */}

      <div
        style={{
          marginTop: "25px",
          textAlign: "center",
          color: "#777",
          fontSize: "14px"
        }}
      >

        🌾 FarmPilot AI v1.0

        <br />

        Smart Farming Assistant for Indian Farmers

      </div>

      <BottomNav language={language} />

    </div>

  );

}

export default Chat;