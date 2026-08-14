import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import translations from "../translations/language";

function Marketplace({ language }) {

  const t = translations[language] || translations.English;

  const products = [

    {
      name: "🌾 Wheat",
      price: "₹2,400 / Quintal",
      seller: "Ramesh",
      phone: "9876543210"
    },

    {
      name: "🌾 Rice",
      price: "₹2,900 / Quintal",
      seller: "Suresh",
      phone: "9876543201"
    },

    {
      name: "🍅 Tomato",
      price: "₹25 / Kg",
      seller: "Mahesh",
      phone: "9876543202"
    },

    {
      name: "🌽 Maize",
      price: "₹2,100 / Quintal",
      seller: "Anil",
      phone: "9876543203"
    },

    {
      name: "🌱 Fertilizer",
      price: "₹1,250 / Bag",
      seller: "Green Agro Store",
      phone: "9876543204"
    },

    {
      name: "🌾 Hybrid Seeds",
      price: "₹450 / Kg",
      seller: "Agri Seeds Center",
      phone: "9876543205"
    }

  ];

  return (

    <div className="home">

      <Header language={language} />

      <div className="card">

        <h2>🌾 Marketplace</h2>

        <p>

          Buy and Sell Agricultural Products

        </p>

      </div>

      {

        products.map((item,index)=>(

          <div

            className="card"

            key={index}

          >

            <h3>

              {item.name}

            </h3>

            <p>

              💰 {item.price}

            </p>

            <p>

              👨‍🌾 Seller : {item.seller}

            </p>

            <p>

              📞 {item.phone}

            </p>

            <button>

              Contact Seller

            </button>

          </div>

        ))

      }

      <BottomNav language={language} />

    </div>

  );

}

export default Marketplace;