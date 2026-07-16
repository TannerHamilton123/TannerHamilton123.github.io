import useTitle from "../hooks/useTitle.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Projects() {
  useTitle("Projects");

  return (
    <>

      
            <h1>My Projects</h1>
<p>Here is a list of some of my most notable work.</p>
<Container>

  <Row style= {{"margin-bottom":"20px"}}>
      <Col>

      <h2
      style= {{"margin-top":"0px"}}>
        RAG-Civil: AI Document Assistant for Civil Engineers</h2>
      <p>
        A retrieval-augmented generation (RAG) application that lets civil
        engineers upload project-specific documents (design guidelines,
        RFIs, etc.) and ask an AI assistant questions about them, receiving
        cited answers pulled only from the uploaded files.
        <br />
        Skills: Python, FastAPI, RAG, OpenAI Embeddings, Claude API, Vector
        Search, HTML/JS
      </p>
      <p><a href="https://tannerhamilton123.github.io/RAG-Civil/">Try RAG-Civil</a></p>
      <p><a href="https://github.com/TannerHamilton123/RAG-Civil">Github</a></p>
      </Col>
  </Row>

  <Row style= {{"margin-bottom":"20px"}}>
      <Col
      >


      <h2
      style= {{"margin-top":"0px"}}>
        Reango Shipping: Django and React browser game</h2>
      <p>
        This simple game runs on React for frontend and Django for API and
        database handling.
        <br />
        Skills: Django Rest Framework, React, Cloud Deployment, API's,
        PosgreSQL
      </p>
      <p><a href="https://reango-shipping-lime.vercel.app/">Play Reango Shipping</a></p>
      <p><a href="https://github.com/TannerHamilton123/Reango_Shipping">Github</a></p>
      </Col>
      <Col className="text-center">
      <iframe
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/nJFrMP67U-k?si=Y9tWOMQZ2KfCBVDe"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Col>
  </Row>

      <Row style= {{"margin-bottom":"20px"}}>
        <Col>
          <h2
          style= {{"margin-top":"0px"}}>
            Space Lander: A Godot Physics Game</h2>
          <p>
            Powered by the Godot game engine, Space Lander is a physics puzzle
            game about piloting a spacecraft around objects and gravitational
            obstacles.
            <br />
            Skills: Godot, Object-Oriented Programming, HTML, Javascript
          </p>
          <p>
            <a href="https://github.com/TannerHamilton123/space-lander">Github</a>
          </p>
        </Col>
        <Col className="text-center">
          <iframe
            frameBorder="0"
            src="https://itch.io/embed/4150455?bg_color=000000&fg_color=ffffff&link_color=c61a0d&border_color=000000"
            width="300"
            height="167"
            title="Space Lander by TannerHamilton123"
          >
            <a href="https://tannerhamilton123.itch.io/space-lander">
              Space Lander by TannerHamilton123
            </a>
          </iframe>
        </Col>
      </Row>

      <Row style= {{"margin-bottom":"20px"}}>
        <Col>
          <h2 style= {{"margin-top":"0px"}}>Ladder Up: Promotional Video Game</h2>
          <p>
            This mobile game was developed for Sunshine Window Washing company,
            featuring an easy and addicting game loop that rewards players with a
            promotional code for their next window wash.
          </p>
          <p>
            <a href="https://github.com/TannerHamilton123/ladder-up">Github</a>
          </p>
        </Col>
        <Col className="text-center">
          <iframe
            frameBorder="0"
            src="https://itch.io/embed/4144917?bg_color=0d2d2e&fg_color=ffe762"
            width="300"
            height="167"
            title="Ladder Up! Sunshine Window Cleaning by TannerHamilton123"
          >
            <a href="https://tannerhamilton123.itch.io/ladder-up">
              Ladder Up! Sunshine Window Cleaning by TannerHamilton123
            </a>
          </iframe>
        </Col>
      </Row>

      <Row style= {{"margin-bottom":"20px"}}>
        <Col>
          <h2 style= {{"margin-top":"0px"}}>Boba Broker: Financial Literacy Game</h2>
          <p>
            This game for Cool Math Games game jam is focused on buying and
            selling ingredients to turn a profit and learn about financial
            responsibility through running a boba shop.
          </p>
          <p>
            <a href="https://github.com/TannerHamilton123/boba-broker">Github</a>
          </p>
        </Col>
        <Col className="text-center">
          <iframe
            frameBorder="0"
            src="https://itch.io/embed/4632918?border_width=4&bg_color=f6c0e4&fg_color=000000&link_color=805880&border_color=b230a0"
            width="300"
            height="173"
            title="Boba Broker by TannerHamilton123"
          >
            <a href="https://tannerhamilton123.itch.io/boba-broker">
              Boba Broker by TannerHamilton123
            </a>
          </iframe>
        </Col>
      </Row>
    </Container>
    </>
  );
}
