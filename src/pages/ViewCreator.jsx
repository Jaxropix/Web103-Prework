import { useEffect, useState } from "react";
import { supabase } from "../client";
import { useParams, Link, useNavigate } from "react-router-dom";

function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) console.error("Supabase error:", error.message);
      else setCreator(data);
    };
    fetchCreator();
  }, [id]);

  if (!creator) return <p>Loading creator...</p>;

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this creator?");
    if (!confirmDelete) return;

    const { error } = await supabase.from("creators").delete().eq("id", creator.id);

    if (error) {
      console.error("Delete error:", error.message);
      alert("Error deleting creator!");
    } else {
      navigate("/"); // go back to homepage
    }
  };

  return (
    <div>
      {/* Back button at the top */}
      <Link to="/">
        <button>Back to All Creators</button>
      </Link>
  
      <h2>{creator.name}</h2>
      <p>
        <strong>URL:</strong> <a href={creator.url} target="_blank">{creator.url}</a>
      </p>
      <p><strong>Description:</strong> {creator.description}</p>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} width="200" />}
  
      {/* Edit and Delete buttons */}
      <Link to={`/creator/${id}/edit`}>
        <button>Edit Creator</button>
      </Link>
      <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
        Delete Creator
      </button>
    </div>
  );
  
}

export default ViewCreator;
