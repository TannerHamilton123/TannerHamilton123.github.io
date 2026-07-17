import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About Me</Link>
          </li>
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <Link to="/ai-integrations/">AI Integrations</Link>
          </li>
          <li>
            <Link to="/resume/">Resume</Link>
          </li>
          <li>
            <Link to="/posts/">Blog</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
}
