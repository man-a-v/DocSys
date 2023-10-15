// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./CSS/CreateAccount.css"; // You can create a new CSS file for this page

// const CreateAccount = () => {
//   // Add your create account form and logic here

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <div className="create-account-form">
//             <h2>Create Account</h2>
//             <Form>
//               {/* Add form fields for creating an account */}
//               <Button variant="primary" onClick={handleCreateAccount}>
//                 Create Account
//               </Button>
//             </Form>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CreateAccount;

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/CreateAccount.css";

const CreateAccount = () => {
  const history = useHistory();

  const handleCreateAccount = () => {
    // Add your logic for creating an account here
    // This function should handle the form submission and account creation process
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="create-account-form">
            <h2>Create Account</h2>
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Control type="text" placeholder="Enter your username" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                />
              </Form.Group>
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

export default CreateAccount;
