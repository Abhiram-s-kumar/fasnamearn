import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import fasnaCV from '../assets/fasna.pdf';


const NavbarComponent = () => {
  const sections = ['hero', 'about', 'projects', 'skills', 'contact'];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: "#f8f4f2",
        padding: "0.8rem 1rem",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        zIndex: 1000,
      }}
    >
      <Container>
        <Navbar.Brand
          style={{
            color: "#222",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Fasna P
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <Nav>
            {sections.map((id) => (
              <Link
                key={id}
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{
                  color: "#222",
                  marginRight: "1rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                activeClass="active"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </Nav>

        <Button
  variant="light"
  href={fasnaCV}
  download
  style={{
    borderRadius: "50px",
    backgroundColor: "#f97316",
    color: "white",
    fontWeight: "500",
    padding: "0.4rem 1.2rem",
    border: "none",
  }}
>
  Download CV
</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
