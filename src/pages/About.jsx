import useTitle from "../hooks/useTitle.js";
import skills from "../data/skills.js";

export default function About() {
  useTitle("About Me");

  return (
    <>
      <h1>About Me</h1>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-tile" key={skill.name}>
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="skill-icon"
            />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
