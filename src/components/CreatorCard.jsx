import { Link } from "react-router-dom";

function CreatorCard({ creator }) {
  return (
    <div className="creator-card">
      <h3>{creator.name}</h3>
      <Link to={`/creator/${creator.id}`}>
        <button>View Details</button>
        
      </Link>
    </div>
  );
}

export default CreatorCard;
