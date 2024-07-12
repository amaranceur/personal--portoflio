import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import todolist from '../assets/img/todolist.png';
import Webstore from '../assets/img/2.png';
import makeup from '../assets/img/makeup.png';
import villa from '../assets/img/4.png';
import crm from '../assets/img/6.png';
import netflix from '../assets/img/netflix.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are some of the projects that I have built.</p>
            <Tab.Container defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-4 justify-content-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Web Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Desktop Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Database Management</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <ProjectCard key={0} title="To Do List" description="Design & Development" imgUrl={todolist} />
                    <ProjectCard key={1} title="Web Store" description="Design & Development" imgUrl={Webstore} />
                    <ProjectCard key={2} title="Django CRM" description="Design & Development" imgUrl={crm} />
                    <ProjectCard key={3} title="Netflix Clone" description="Design & Development" imgUrl={netflix} />
                    <ProjectCard key={4} title="Makeup Site" description="Design & Development" imgUrl={makeup} />
                    <ProjectCard key={5} title="Agency Site" description="Design & Development" imgUrl={villa} />
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                I have experience with Java and SQL. This allows me to develop robust desktop applications. My ability to integrate Java with SQL databases ensures efficient data management and seamless functionality in desktop environments
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                I am highly skilled in database management, which is one of my core strengths as a developer. My expertise includes designing, implementing, and maintaining efficient and secure databases
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
};

export default Projects;
