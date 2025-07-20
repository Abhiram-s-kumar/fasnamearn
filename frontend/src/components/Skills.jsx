import { Container, Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const skills = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "RESTful APIs",
  "JWT Authentication",
  "MongoDB Atlas",
  "Mongoose ODM",
  "React Hooks & Context API"
];

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      style={{
        backgroundColor: "#f8f4f2",
        padding: "80px 0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.6s ease-in-out",
      }}
    >
      <Container>
        <h2
          className="text-center mb-5"
          style={{
            color: "#222",
            fontWeight: "bold",
            fontSize: "2.2rem"
          }}
        >
          Skills & Tools
        </h2>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col key={index} md={4} sm={6} xs={12} className="d-flex justify-content-center mb-4">
              <Card
                style={{
                  width: "100%",
                  border: "none",
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  padding: "20px",
                  transition: "transform 0.3s ease",
                  textAlign: "center"
                }}
              >
                <Card.Body>
                  <Card.Text style={{ fontWeight: 500, color: "#f97316", fontSize: "1.1rem" }}>
                    {skill}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
