import { useEffect, useState } from "react";
import { supabase } from "../client";
import { useParams, useNavigate } from "react-router-dom";

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) console.error("Supabase error:", error.message);
      else {
        setCreator(data);
        setName(data.name);
        setUrl(data.url);
        setDescription(data.description);
        setImageURL(data.imageURL || "");
      }
    };
    fetchCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("creators")
      .update({ name, url, description, imageURL: imageURL || null })
      .eq("id", id);

    if (error) console.error("Update error:", error.message);
    else navigate(`/creator/${id}`);
  };

  if (!creator) return <p>Loading creator...</p>;

  return (
    <div>
      <h2>Edit Creator</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        /><br/>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL"
          required
        /><br/>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        /><br/>
        <input
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          placeholder="Image URL (optional)"
        /><br/>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditCreator;
