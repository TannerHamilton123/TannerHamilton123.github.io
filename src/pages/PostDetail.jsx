import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import useTitle from "../hooks/useTitle.js";
import posts from "../data/posts.js";

const postFiles = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export default function PostDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const content = post ? postFiles[`../posts/${slug}.md`] : null;

  useTitle(post ? post.title : "Post not found");

  if (!post || !content) {
    return <Navigate to="/posts/" replace />;
  }

  return <ReactMarkdown>{content}</ReactMarkdown>;
}
