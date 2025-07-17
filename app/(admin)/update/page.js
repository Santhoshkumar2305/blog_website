'use client'
import { useState } from "react";
import dataset from "../../../avengers.json";

const UpdatePage = () => {
  const [selectedId, setSelectedId] = useState("");
  const [movieData, setMovieData] = useState({ id: "", title: "", desc: "", year: "", img: "" });
  const handleSelectChange = (e) => {
    const id = Number(e.target.value);
    setSelectedId(id);
    const movie = dataset.find(m => m.id === id);
    setMovieData(movie || { id: "", title: "", desc: "", year: "", img: "" });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/updateMovie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieData)
    });
    if (res.ok) alert("Movie updated successfully!");
    else alert("Failed to update movie.");
  };
  return (
    <div>
      <h1 className="update-head" style={{color:"white"}}>Update Blog</h1>
      <div className="update">
      <div>
        <label>Select a Movie to Update: </label>
        <select onChange={handleSelectChange} defaultValue="">
          <option value="" disabled>Select movie</option>
          {dataset.map(({ id, title }) => (
            <option key={id} value={id}>{title}</option>
          ))}
        </select>
      </div>
      {selectedId && (
        <form className="update-form" onSubmit={handleUpdate}>
          <div><p>Movie id:</p><input type="number" value={movieData.id} disabled /></div>
          <div><p>Movie:</p><input type="text" value={movieData.title} onChange={(e) => setMovieData({ ...movieData, title: e.target.value })} required /></div>
          <div><p>Description:</p><input type="text" value={movieData.desc} onChange={(e) => setMovieData({ ...movieData, desc: e.target.value })} required /></div>
          <div><p>Release year:</p><input type="number" value={movieData.year} onChange={(e) => setMovieData({ ...movieData, year: e.target.value })} required /></div>
          <div><p>Image URL:</p><input type="text" value={movieData.img} onChange={(e) => setMovieData({ ...movieData, img: e.target.value })} required /></div>
          <button>Update</button>
        </form>
      )}
      </div>
    </div>
  );
};

export default UpdatePage;
