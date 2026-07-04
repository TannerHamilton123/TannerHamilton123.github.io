import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle.js";
import posts from "../data/posts.js";

function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Posts() {
  useTitle("Blog");

  return (
    <>
      <h1>My Blog</h1>

      <p>
        Here are some thoughts I've written with no clear theme, just stuff
        I've been interested in and thinking about.
      </p>

      <ul className="blog-list">
        {posts.map((post) => (
          <li className="blog-item" key={post.slug}>
            <Link to={`/posts/${post.slug}`} className="post-title">
              {post.title}
            </Link>
            <span className="post-date">{formatDate(post.date)}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
