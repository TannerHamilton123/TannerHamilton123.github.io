import useTitle from "../hooks/useTitle.js";

export default function Home() {
  useTitle("Home");

  return (
    <>
      <img
        src="/assets/headshot.jpg"
        alt="Tanner Hamilton"
        className="headshot"
      />
      <h1>Tanner Hamilton</h1>
      <h2>Professional Portfolio Website</h2>

      <p>
        I am a young professional in the Bay
        Area who is a civil engineer, consultant, game developer, and software
        developer.
      </p>

      <p>
        I'm glad you stopped by. Use the navigation bar above to learn
        more <strong>About Me</strong>, view my <strong>Projects</strong>, or
        download my <strong>Resume (PDF)</strong>.
      </p>

      <p>
        <em>This site is built using React and hosted on GitHub Pages.</em>
      </p>
    </>
  );
}
