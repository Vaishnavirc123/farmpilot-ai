import "./FarmCard.css";

function FarmCard() {
  return (
    <div className="farm-card">

      <h3>🌾 My Farm</h3>

      <div className="farm-row">
        <span>Crop</span>
        <strong>Wheat</strong>
      </div>

      <div className="farm-row">
        <span>Area</span>
        <strong>3 Acres</strong>
      </div>

      <div className="farm-row">
        <span>Status</span>
        <strong>Healthy 🌱</strong>
      </div>

      <div className="farm-row">
        <span>Growth</span>
        <strong>68%</strong>
      </div>

    </div>
  );
}

export default FarmCard;