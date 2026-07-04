import useTitle from "../hooks/useTitle.js";

export default function Resume() {
  useTitle("Resume");

  return (
    <>
      <h1>My Professional Resume</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <a
          href="/assets/Tanner_Hamilton_Resume.pdf"
          className="download-button"
          download
        >
          Download Resume (PDF)
        </a>
      </div>

      <iframe
        src="/assets/Tanner_Hamilton_Resume.pdf#toolbar=0"
        style={{ width: "100%", height: "1050px", border: "none" }}
        title="Professional Resume PDF Viewer"
      >
        <p>
          Your browser does not support inline PDFs. Please use the download
          link above.
        </p>
      </iframe>
    </>
  );
}
