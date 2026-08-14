import {
  FaSeedling,
  FaBug,
  FaCamera,
  FaTint,
  FaCloudSun,
  FaChartLine,
  FaCalendarAlt,
  FaUniversity,
  FaShoppingCart,
  FaUserTie
} from "react-icons/fa";

import "./QuickActions.css";


const actions = [

  {
    title:"Fertilizer",
    icon:<FaSeedling />,
    color:"green"
  },

  {
    title:"Pest Control",
    icon:<FaBug />,
    color:"red"
  },

  {
    title:"Crop Doctor",
    icon:<FaCamera />,
    color:"blue"
  },

  {
    title:"Irrigation",
    icon:<FaTint />,
    color:"cyan"
  },

  {
    title:"Weather",
    icon:<FaCloudSun />,
    color:"orange"
  },

  {
    title:"Market Price",
    icon:<FaChartLine />,
    color:"purple"
  },

  {
    title:"Crop Calendar",
    icon:<FaCalendarAlt />,
    color:"green"
  },

  {
    title:"Government Schemes",
    icon:<FaUniversity />,
    color:"yellow"
  },

  {
    title:"Buy Seeds",
    icon:<FaShoppingCart />,
    color:"blue"
  },

  {
    title:"Expert Advice",
    icon:<FaUserTie />,
    color:"red"
  }

];


function QuickActions(){

  return (

    <div className="quick-section">


      <h3>
        🚀 Quick Farming Help
      </h3>


      <div className="action-grid">


      {
        actions.map((item)=>(

          <div
            key={item.title}
            className={`action-card ${item.color}`}
          >

            <div className="action-icon">

              {item.icon}

            </div>


            <p>
              {item.title}
            </p>


          </div>


        ))
      }


      </div>


    </div>

  );

}


export default QuickActions;