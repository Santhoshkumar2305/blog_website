"use client";
import { useParams } from "next/navigation";
import dataset from "../../../../avengers.json";
import Image from "next/image";

const BlogDetails = () => {
  const { blogid } = useParams();
  const movie = dataset.find((item) => item.id === Number(blogid));
  if (!movie) return <p>Movie not found</p>;
  return (
    <div className="movie-container">
      <div className="movie-img">
      <img src={movie.img} alt={movie.title} className="movie-image"/>
      </div>
      <div className="movie-detail">
      <p><b>Movie:</b> {movie.title}</p>
      <p><b>Release year:</b> {movie.year}</p>
      <p><b>Description:</b> {movie.desc}</p>
      </div>
    </div>
  );
};

export default BlogDetails;