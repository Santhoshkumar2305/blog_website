'use client'
import { useState } from "react";
import dataset from "../../../avengers.json";

const DeletePage=()=> {
  const [selectedId,setSelectedId]=useState("");
  const handleDelete=async(e)=> {
    e.preventDefault();
    if(!selectedId)return alert("Please select a movie");
    const res=await fetch("/api/deleteMovie",{
      method:"DELETE",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({ id:Number(selectedId) })
    });
    if(res.ok)alert("Movie deleted successfully!");
    else alert("Failed to delete movie.");
  };
  return(
    <div className="delete">
      <h1>Delete a Movie</h1>
      <div className="delete-div">
      <form className="delete-form" onSubmit={handleDelete}>
        <div>
          <label>Select a Movie to Delete: </label>
          <select onChange={(e)=>setSelectedId(e.target.value)} defaultValue="">
            <option value="" disabled>Select movie</option>
            {dataset.map(({id,title})=>(
              <option key={id} value={id}>{title}</option>
            ))}
          </select>
        </div>
        <button>Delete</button>
      </form>
      </div>
    </div>
  );
};

export default DeletePage;
