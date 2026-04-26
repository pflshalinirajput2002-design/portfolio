import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="app">
      
      {/* Inline CSS for Contact Page */}
      <style>{`
        .contact-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 80px;
          padding-bottom: 40px;
          color: white;
        }

        .contact-title {
          font-weight: bold;
          color: #fff;
        }

        .contact-subtitle {
          color: #ccc;
        }

        .contact-card {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-card a {
          text-decoration: none;
          transition: color 0.3s;
        }

        .contact-card a:hover {
          color: #ff4d4d;
        }

        .footer {
          text-align: center;
          padding: 20px 0;
          color: #aaa;
          background: transparent;
        }
      `}</style>

      <Container className="contact-container">
        <Row className="text-center mb-5">
          <Col>
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-subtitle">
              Let's connect and build something amazing together 🚀
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6} className="contact-card p-4 rounded shadow">
            <h4 className="mb-4 text-danger">Get In Touch</h4>

            <p>
              📧 Email:{" "}
              <a href="mailto:shalinipfl2002@gmail.com" className="text-info">
                shalinipfl2002@gmail.com
              </a>
            </p>

            <p>
              📞 Contact: <span className="text-info">+91 8279551734</span>
            </p>

            <p>
              💻 GitHub:{" "}
              <a
                href="https://github.com/pflshalinirajput2002-design"
                target="_blank"
                rel="noopener noreferrer"
                className="text-info"
              >
                github.com/pflshalinirajput2002-design
              </a>
            </p>


           <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/shalini-rajput-65800927a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info"
            >
              linkedin.com/in/shalini-rajput-65800927a
            </a>
          </p>
            <div className="text-center mt-4">
              <a href="/Resume_shalini.pdf" download>
                <Button variant="danger">📄 Download Resume</Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Shalini Rajput. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;
