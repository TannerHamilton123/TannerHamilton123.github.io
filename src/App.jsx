import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import AIIntegrations from "./pages/AIIntegrations.jsx";
import Resume from "./pages/Resume.jsx";
import Posts from "./pages/Posts.jsx";
import PostDetail from "./pages/PostDetail.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/projects/" element={<Projects />} />
        <Route path="/ai-integrations/" element={<AIIntegrations />} />
        <Route path="/resume/" element={<Resume />} />
        <Route path="/posts/" element={<Posts />} />
        <Route path="/posts/:slug" element={<PostDetail />} />
      </Route>
    </Routes>
  );
}
