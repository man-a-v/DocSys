import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/Login.css"; // Import the CSS file
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = () => {
    // Use the history object to navigate to the "Create Account" page
    history.push("/create-account");
  };
  const handleLogin = () => {
    // Add your login logic here
    if (username === "your_username" && password === "your_password") {
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="login-form">
            <h2>Login</h2>
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>
              <Button variant="primary" onClick={handleCreateAccount}>
                Create Account
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
