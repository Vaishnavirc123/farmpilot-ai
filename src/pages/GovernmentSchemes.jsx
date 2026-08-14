import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import translations from "../translations/language";

function GovernmentSchemes({ language }) {

  const t = translations[language] || translations.English;

  const schemes = [

    {
      name: "PM-KISAN",
      benefit: "₹6,000 per year",
      eligibility: "Small & Marginal Farmers"
    },

    {
      name: "PMFBY",
      benefit: "Crop Insurance",
      eligibility: "All Farmers"
    },

    {
      name: "Kisan Credit Card",
      benefit: "Low Interest Farm Loan",
      eligibility: "Eligible Farmers"
    },

    {
      name: "Soil Health Card",
      benefit: "Free Soil Testing",
      eligibility: "All Farmers"
    }

  ];

  return (

    <div className="home">

      <Header language={language} />

      <div className="card">

        <h2>💸 Government Schemes</h2>

        <p>

          Explore schemes available for farmers.

        </p>

      </div>

      {

        schemes.map((scheme, index) => (

          <div
            className="card"
            key={index}
          >

            <h3>{scheme.name}</h3>

            <p>

              <b>Benefit:</b>

              {" "}

              {scheme.benefit}

            </p>

            <p>

              <b>Eligibility:</b>

              {" "}

              {scheme.eligibility}

            </p>

            <button>

              Apply Now

            </button>

          </div>

        ))

      }

      <BottomNav language={language} />

    </div>

  );

}

export default GovernmentSchemes;