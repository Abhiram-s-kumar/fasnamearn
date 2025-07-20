import { Container, Card, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const projects = [
  {
    title: "Eventive – MERN Stack",
    points: [
      "Designed and developed a full-stack event management application with user registration, event listings, and ticket booking.",
      "Implemented secure authentication (JWT), RESTful APIs, and integrated MongoDB for data persistence.",
      "Used React-Bootstrap for responsive UI, improving mobile user engagement by 30%.",
    ],
    role: "Full-stack Developer – led back-end logic and UI implementation."
  },
  {
    title: "Audi Clone Website – HTML5, Tailwind CSS",
    points: [
      "Created a modern, pixel-perfect replica of the official Audi website.",
      "Ensured mobile responsiveness and cross-browser compatibility.",
    ],
    role: "Front-end Developer – focused on layout, responsiveness, and design accuracy."
  },
  {
    title: "Labour Assist – MERN Stack",
    points: [
      "Built a local labor marketplace platform connecting individuals with nearby skilled workers.",
      "Users can post job requirements; laborers can browse and apply for matching jobs.",
      "Promotes safe, verified connections while supporting local employment opportunities.",
    ],
    role: "Full-stack Developer – developed both frontend and backend with a focus on secure user flow and job matchmaking."
  }
];

const ProjectsSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projects"
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
          className="mb-5 text-center"
          style={{
            color: "#222",
            fontWeight: "bold",
            fontSize: "2.2rem",
          }}
        >
          Projects
        </h2>

        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col
              key={index}
              xs={12}
              md={6}
              lg={5}
              className="mb-4 d-flex justify-content-center"
            >
              <Card
                style={{
                  border: "none",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#fff",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                  width: "100%",
                  maxWidth: "500px"
                }}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#f97316",
                      marginBottom: "10px",
                    }}
                  >
                    {project.title}
                  </Card.Title>
                  <ul>
                    {project.points.map((point, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: "0.9rem",
                          marginBottom: "6px",
                          color: "#333"
                        }}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontSize: "0.9rem", marginTop: "10px", color: "#444" }}>
                    <strong>Role:</strong> {project.role}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;
