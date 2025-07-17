'use client'
import { useState } from "react";
const CreatePage = () => {
  const [formData, setFormData] = useState({ id: "", title: "", desc: "", year: "", img: "" });
  const handleSubmit = async (e) => {
   e.preventDefault();
   const res = await fetch("/api/addMovie",{
    method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({
        id:Number(formData.id),
        title:formData.title,
        desc:formData.desc,
        year:Number(formData.year),
        img:formData.img
    })
   });
    if(res.ok)
        alert("Movie Added Successfully");
    else    
        alert("Error Adding Movie")
}
  return (
    <div className="create">
      <h1>Create your Blog</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <div><p>Movie id: </p><input type="number" placeholder="Enter movie Id" required onChange={(e) => setFormData({ ...formData, id: e.target.value })} /></div>
        <div><p>Movie: </p><input type="text" placeholder="Enter movie name" required onChange={(e) => setFormData({ ...formData, title: e.target.value })} /></div>
        <div><p>Description: </p><input type="text" placeholder="Enter description" required onChange={(e) => setFormData({ ...formData, desc: e.target.value })} /></div>
        <div><p>Release year: </p><input type="text" placeholder="Enter release year" required onChange={(e) => setFormData({ ...formData, year: e.target.value })} /></div>
        <div><p>Image URL: </p><input type="text" placeholder="Enter image url" required onChange={(e) => setFormData({ ...formData, img: e.target.value })} /></div>
        <button>Create</button>
      </form>
    </div>
  );
};
export default CreatePage;
