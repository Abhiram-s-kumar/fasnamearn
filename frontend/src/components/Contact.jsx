import { Container, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const Contact = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#f8f4f2',
        padding: '100px 0 80px 0',
        textAlign: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 0.6s ease-in-out',
      }}
    >
      <Container>
        <h2
          style={{
            color: '#222',
            fontWeight: 'bold',
            fontSize: '2.4rem',
            marginBottom: '40px',
          }}
        >
          Let's Connect 🤝
        </h2>

        <Card
          style={{
            border: 'none',
            borderRadius: '20px',
            padding: '40px',
            backgroundColor: '#fff',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          <Card.Body>
            <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '25px' }}>
              Available for collaborations, freelance MERN Stack web development, or a thoughtful discussion on modern web technologies
            </p>

            <div style={{ lineHeight: '2.2' }}>
              <p>
                📧 <strong>Email:</strong>{' '}
                <a
                  href="mailto:faznap2025@gmail.com"
                  style={{ color: '#f97316', textDecoration: 'none' }}
                >
                  faznap2025@gmail.com
                </a>
              </p>
              <p>
                📱 <strong>Phone:</strong>{' '}
                <a
                  href="tel:+971501733893"
                  style={{ color: '#f97316', textDecoration: 'none' }}
                >
                  +971 501733893
                </a>
              </p>
              <p>
                📸 <strong>Instagram:</strong>{' '}
                <a
                  href="https://www.instagram.com/fazna__zaan?igsh=MTdsc2xtZ2NodHVxcQ=="
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#f97316', textDecoration: 'none' }}
                >
                  @fazna__zaan
                </a>
              </p>
              <p>
                💼 <strong>LinkedIn:</strong>{' '}
                <a
                  href="http://linkedin.com/in/fasna-p-87bba22a4"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#f97316', textDecoration: 'none' }}
                >
                  fasna-p-87bba22a4
                </a>
              </p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Contact;