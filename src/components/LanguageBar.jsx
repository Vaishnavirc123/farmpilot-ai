function LanguageBar({

  language = "English",

  setLanguage = () => {}

}) {

  const languages = [
    "English",
    "తెలుగు",
    "हिंदी",
    "ಕನ್ನಡ",
    "தமிழ்",
    "മലയാളം"
  ];

  return (

    <div
      style={{
        margin: "20px 0"
      }}
    >

      <label
        style={{
          fontWeight: "bold",
          display: "block",
          marginBottom: "8px"
        }}
      >
        🌐 Language
      </label>

      <select

        value={language}

        onChange={(e) => setLanguage(e.target.value)}

        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}

      >

        {

          languages.map((lang) => (

            <option

              key={lang}

              value={lang}

            >

              {lang}

            </option>

          ))

        }

      </select>

    </div>

  );

}

export default LanguageBar;