import { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

function AddCreator() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { data, error } = await supabase.from("creators").insert([
      { name, url, description, imageURL: imageURL || null }
    ]);
  
    if (error) {
      console.error("Insert error:", error);
      alert(JSON.stringify(error));
    } else {
      navigate("/");
    }
  };
  

  return (
    <div>
      <h2>Add a New Creator</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br/>
        <input
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        /><br/>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        /><br/>
        <input
          placeholder="Image URL (optional)"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        /><br/>
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
}

export default AddCreator;
