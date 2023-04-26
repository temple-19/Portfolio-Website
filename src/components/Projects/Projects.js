import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import booking from '../../Assets/Projects/booking.JPG';
import calculator from '../../Assets/Projects/calculator.JPG';
import pandascrow from '../../Assets/Projects/pandascrow.JPG';
import recipe from '../../Assets/Projects/recipe.JPG';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator Project"
              description="The Calculator Project is an online platform that provides users with a simple and easy-to-use calculator for performing basic arithmetic operations. Users can access the calculator through a web browser, and input numbers and operations using a numeric keypad displayed on the website."
              ghLink="https://github.com/temple-19/Clean-Calculator"
              demoLink="https://ubiquitous-pudding-b3180a.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pandascrow}
              isBlog={false}
              title="Pandscrow - A Secure Payment Platform"
              description="Pandascrow.io is an online platform that provides a decentralized escrow service for cryptocurrency transactions. It enables buyers and sellers to transact with each other safely and securely without the need for intermediaries. Pandascrow.io operates on the blockchain technology, which allows for transparent and secure transactions."
              demoLink="https://pandascrow.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Food Recipe Website"
              description="The Food recipe website is an online platform that provides users with a collection of recipes for various dishes and cuisines. This website features recipes that are submitted by professional chefs, home cooks, or food bloggers. Users can search for recipes based on ingredients and dietary restrictions. "
              ghLink="https://github.com/temple-19/recipe-app"
              demoLink="https://astounding-melba-78eaae.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booking}
              isBlog={false}
              title="Hotel Reservation Website"
              description="This is an online platform where users can search, compare, and book hotel accommodations. It allows users to input their arrival dates, destination, preferences and displays a list of available hotels."
              ghLink="https://github.com/temple-19/BOOKINGAPP"
              demoLink="https://chipper-pie-6f9780.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
