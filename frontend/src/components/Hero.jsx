import { Container, Row, Col, Image } from 'react-bootstrap';
import profile from '../assets/fasna.jpg'; // replace with actual image

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: '#f8f4f2',
        paddingTop: '140px',
        paddingBottom: '120px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6} className="mb-4 mb-md-0 d-flex justify-content-center">
            <Image
              src={profile}
              alt="Fasna"
              roundedCircle
              fluid
              style={{
                width: '280px',
                height: '280px',
                objectFit: 'cover',
                boxShadow: '0 10px 28px rgba(0,0,0,0.12)',
                border: '6px solid white',
              }}
            />
          </Col>
          <Col md={6}>
            <h1
              style={{
                fontSize: '3.4rem',
                fontWeight: '700',
                color: '#222',
              }}
            >
              Hi, I'm <span style={{ color: '#f97316' }}>Fasna</span> 👋
            </h1>
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: '500',
                color: '#444',
                marginTop: '15px',
                marginBottom: '25px',
              }}
            >
              Full-Stack MERN Developer
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#555', maxWidth: '520px' }}>
              Passionate about building modern, scalable web applications using MongoDB, Express, React, and Node.js. 
              I focus on clean code, responsive design, and performance-driven development.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
