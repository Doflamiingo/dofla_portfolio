import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpeg";
import projImg5 from "../assets/img/project-img5.jpeg";
import projImg6 from "../assets/img/project-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
export const Projects = () => {
  const projects = [
    {
      href: "https://lykanza.fr/",
      title: "Lykanza",
      description: "Site e-commerce de bracelets",
      imgUrl: projImg4,
    },
    {
      href: "https://powerup-invest.fr/",
      title: "PowerUp Invest",
      description: "Site de formation sur le trading et cryptomonnaie",
      imgUrl: projImg1,
    },
    {
      href: "",
      title: "Skeep",
      description: "Site vitrine de barber",
      imgUrl: projImg2,
    },
  ];
  const projects2 = [
    {
      title: "Mon porfolio",
      description: "Site de formation sur le trading et cryptomonnaie",
      imgUrl: projImg5,
    },
    {
      title: "Portfolio client",
      description: "Portfolio motion designer",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projets</h2>
            <p>
              Voici les projets que j'ai réalisé. Cliquez sur une image pour
              voir le site en question (certains site ne sont pas encore
              accessible).
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Sites Wordpress/CMS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">From Scratch</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Application mobile</Nav.Link>
                </Nav.Item>
              </Nav>

              <TrackVisibility once>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__fadeIn animate__slower	2s"
                        : ""
                    }
                  >
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project2, index) => {
                            return <ProjectCard key={index} {...project2} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Pas encore de contenus ici ;)</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                )}
              </TrackVisibility>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
