import useTitle from "../hooks/useTitle.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const caseStudies = [
  {
    id: "rag-civil",
    title: "RAG Civil Project",
    hook: "An AI assistant that answers civil engineering questions from your own project documents.",
    tags: ["Python", "FastAPI", "RAG", "OpenAI Embeddings", "Claude API", "Vector Search"],
  },
  {
    id: "rfi-submittal-workflow",
    title: "RFI and Submittal Workflow and Analysis",
    hook: "Draft: an AI-assisted workflow for triaging and analyzing RFIs and submittals faster.",
    tags: ["Copilot Studio", "Power Automate", "SharePoint"],
  },
];

export default function AIIntegrations() {
  useTitle("AI Integrations");

  return (
    <>
      <h1>AI Integrations</h1>
      <p>
        My background sits at the intersection of civil engineering and
        software: I've spent my career in the details of RFIs, submittals,
        and project documentation, and more recently I've been applying AI
        to make that work faster and less error-prone. The case studies
        below trace that narrative &mdash; from a document-grounded AI
        assistant for civil engineers to a workflow tool for RFI and
        submittal analysis.
      </p>

      <div className="skills-container case-study-grid">
        {caseStudies.map((study) => (
          <a href={`#${study.id}`} className="case-study-card" key={study.id}>
            <h3>{study.title}</h3>
            <p>{study.hook}</p>
            <div className="case-study-tags">
              {study.tags.map((tag) => (
                <span className="case-study-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <Container>
        <Row id="rag-civil" style={{ "margin-bottom": "20px" }}>
          <Col>
            <h2 style={{ "margin-top": "0px" }}>
              RAG Civil Project: AI Document Assistant for Civil Engineers
            </h2>
            <p>
              <strong>Problem:</strong> Civil engineers regularly need to
              answer specific questions against a pile of project documents
              &mdash; design guidelines, RFIs, and specs &mdash; and manually
              searching them is slow and error-prone.
            </p>
            <p>
              <strong>Approach:</strong> I built a retrieval-augmented
              generation (RAG) application that lets engineers upload
              project-specific documents and ask an AI assistant questions
              about them, using vector search over OpenAI embeddings and the
              Claude API to ground every answer in the uploaded files.
            </p>
            <p>
              <strong>Impact:</strong> Answers come back cited directly from
              the source documents rather than from general knowledge,
              turning a manual document search into a conversational lookup.
              <br />
              Skills: Python, FastAPI, RAG, OpenAI Embeddings, Claude API,
              Vector Search, HTML/JS
            </p>
            <p>
              <a href="https://tannerhamilton123.github.io/RAG-Civil/">
                Try RAG-Civil
              </a>
            </p>
            <p>
              <a href="https://github.com/TannerHamilton123/RAG-Civil">
                Github
              </a>
            </p>
          </Col>
        </Row>

        <Row id="rfi-submittal-workflow" style={{ "margin-bottom": "20px" }}>
          <Col>
            <h2 style={{ "margin-top": "0px" }}>
              RFI and Submittal Workflow and Analysis
            </h2>

            <p>
              <strong>Problem:</strong> RFIs and submittals pile up in email boxes,
              becoming difficult to track what has been intaked, distributed and responded to.
            </p>
            <p>
              <strong>Approach:</strong> I developed a light-weight workflow
              using our existing Microsoft environment to recieve RFI's/submittals from
              our client, store them in our shared drive, update our log, and use AI to scan the document to determine
              the expertise/subconsultant to assign this task to.
            </p>
            <p>
              <strong>Impact:</strong> The goal is to cut down the time
              engineers spend on first-pass review, so more time goes to
              engineering judgment instead of administrative sorting.
              <br />
              Skills: Copilot Studio, Power Automate, SharePoint, Automation
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
