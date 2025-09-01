import { useEffect, useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";
import CreatorCard from "../components/CreatorCard";

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("creators").select("*");
      if (error) console.error("Supabase error:", error.message);
      else setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <div>
      <h2>All Content Creators</h2>

      {/* Always show the Add button */}
      <Link to="/new">
        <button>Add New Creator</button>
      </Link>

      {/* Show message if no creators */}
      {creators.length === 0 ? (
        <p>No creators yet!</p>
      ) : (
        creators.map((c) => <CreatorCard key={c.id} creator={c} />)
      )}
    </div>
  );
}

export default ShowCreators;
