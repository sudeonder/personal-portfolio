import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/quizapp1.png";
import projImg2 from "../assets/img/quizapp2.png";
import projImg3 from "../assets/img/quizapp3.png";
import projImg4 from "../assets/img/quizapp4.png";
import projImg5 from "../assets/img/quizapp5.png";
import proj2Img1 from "../assets/img/tilevania1.jpg";
import proj2Img2 from "../assets/img/tilevania2.jpg";
import proj2mg3 from "../assets/img/tilevania3.jpg";
import proj3Img1 from "../assets/img/spacegame1.jpg";
import proj3Img2 from "../assets/img/spacegame2.jpg";
import proj3Img3 from "../assets/img/spacegame3.jpg";
import proj3Img4 from "../assets/img/spacegame4.jpg";
import proj3Img5 from "../assets/img/spacegame5.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const project1 = [
    {
      size: 2,
      title: "Quiz App",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      size: 2,
      title: "Quiz App",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      size: 2,
      title: "Quiz App",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      size: 2,
      title: "Quiz App",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      size: 2,
      title: "Quiz App",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    
  ];

  const project2 = [
    {
      size: 6,
      title: "TileVania",
      description: "Design & Development",
      imgUrl: proj2Img2,
    },
    {
      size: 6,
      title: "TileVania",
      description: "Design & Development",
      imgUrl: proj2mg3,
    },
  ];

  const project3 = [
    {
      size: 3,
      title: "Space Defender",
      description: "Design & Development",
      imgUrl: proj3Img1,
    },
    {
      size: 3,
      title: "Space Defender",
      description: "Design & Development",
      imgUrl: proj3Img3,
    },
    {
      size: 3,
      title: "Space Defender",
      description: "Design & Development",
      imgUrl: proj3Img5,
    },
    {
      size: 3,
      title: "Space Defender",
      description: "Design & Development",
      imgUrl: proj3Img2,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some projects I made! </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>This is a quiz game that asks random space-related questions with multiple choice answers. The app fetches random questions from OpenAI by using OpenAI's API. Made with Flutter & Dart </p>
                    
                      <Row className="justify-content-center">
                        {
                          project1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>TileVania is a 2D side-scrolling platformer game where you control a character who navigates through various levels, jumping over obstacles and reaching the end goal.</p>
                      <p><a href="https://sudeonder.itch.io/tilevania">Play the game here!</a></p>
                      <Row className="justify-content-center">
                        {
                          project2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>A space defender game where the objective is to destroy alien spaceships. Made with Unity & C#</p>
                      <Row className="justify-content-center">
                      {
                          project3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
