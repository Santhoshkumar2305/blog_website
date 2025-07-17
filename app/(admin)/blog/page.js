import Link from "next/link";
import dataset from "../../../avengers.json";

const BlogPage = () => {
  return (
    <div className="blogpage">
      <h1 style={{color:"white"}}>Blog on Movies</h1>
      <div className="grid">
        {dataset.map(({ id, title, img }) => (
          <Link key={`blog${id}`} href={`/blog/${id}`} className="card">
            <img src={img} alt={title} className="blogimg" />
            <h2>{title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default BlogPage;
