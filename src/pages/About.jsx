import useTitle from "../hooks/useTitle.js";
import skills from "../data/skills.js";
import professionalSkills from "../data/professionalSkills.js";

export default function About() {
  useTitle("About Me");

  return (
    <>
      <h1>About Me</h1>

      <p>
        I studied civil engineering at UC Davis, drawn to the field by a deep
        interest in math and problem-solving and a belief in building
        reliable infrastructure for the common good of society.
      </p>

      <p>
        My career began as a consultant at WSP, where I gained experience in
        transit design, heavy civil engineering, and advisory consultancy. I
        led site visits to client facilities and coordination meetings to
        align stakeholder needs with project direction, working alongside
        subject matter experts to deliver multi-faceted solutions for key
        clients.
      </p>

      <p>
        I later transitioned to BKF Engineers to deepen my experience in
        design and localized civil engineering. There, I've designed grading,
        drainage, utility, and paving plans for transportation and land
        development projects, and provided construction support requiring
        fast, cross-disciplinary coordination to resolve issues in the field.
      </p>

      <p>
        I care about equitable infrastructure and technology, and believe
        some of the greatest challenges facing our society are wealth
        distribution, climate change, and the risks of artificial
        intelligence. I look for a career that addresses one of these
        challenges while giving me room to grow both professionally and
        personally.
      </p>

      <p>
        Outside of work, I spend as much time as I can outdoors with my
        partner and our dog: camping, going to concerts, rock climbing, and
        running. I'm also a regular performer with my local comedy improv
        troupe, and I dabble in miniature painting. I support the Clean Air
        Task Force and Children International.
      </p>

      <h2>Professional Skills</h2>
      <div className="skills-container">
        {professionalSkills.map((skill) => (
          <div className="skill-tile" key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>

      <h2>Technical Skills</h2>
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
