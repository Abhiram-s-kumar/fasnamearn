import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="about"
      style={{
        backgroundColor: '#f8f4f2',
        padding: '100px 0',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 0.6s ease-in-out',
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10} lg={8}>
            <h2
              style={{
                fontSize: '2.4rem',
                fontWeight: '700',
                color: '#222',
                marginBottom: '18px',
              }}
            >
              Who Am I?
            </h2>
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '1.15rem',
                color: '#f97316',
                marginBottom: '30px',
              }}
            >
              A developer passionate about building modern, user-centric web applications.
            </p>
            <p
              style={{
                fontSize: '1.1rem',
                color: '#444',
                lineHeight: '1.9',
              }}
            >
              I’m <strong>Fasna</strong>, a full-stack developer specializing in the <strong>MERN stack</strong> — MongoDB, Express, React, and Node.js.
              I love transforming ideas into scalable, responsive, and high-performing web applications. From crafting intuitive UIs with React to building
              secure backends with Node.js and Express, I enjoy every part of the development lifecycle.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#444',
                lineHeight: '1.9',
                marginTop: '20px',
              }}
            >
              My approach is clean, efficient, and focused on user experience. I’m always learning and exploring new technologies to keep improving and
              delivering value to users and clients.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
