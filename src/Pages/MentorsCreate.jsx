import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./PostCreate.css";

const MentorsCreate = () => {
  return (
    <div>
      <h4 id="header-create-post"> Become a Mentor</h4>
      <Form>
        <Form.Group
          className="mb-3 form-group"
          controlId="exampleForm.ControlInput1"
        >
            <Container>
                <Row>
                    <Col>
                        <Form.Label> First Name </Form.Label>
                        <Form.Control type="text" />
                    </Col>
                    <Col>
                        <Form.Label> Last Name </Form.Label>
                        <Form.Control type="text" />
                    </Col>
                </Row> 
                <Row>
                    <Col>
                        <Form.Label> Company </Form.Label>
                        <Form.Control type="text" />
                    </Col>
                    <Col>
                        <Form.Label> Job Title </Form.Label>
                        <Form.Control type="text" />
                    </Col>
                </Row> 
                <Row>
                    <Col>
                        <Form.Label>Bio</Form.Label>
                        <Form.Control as="textarea" rows={6} />
                    </Col>
                </Row> 
            </Container>
        </Form.Group>
      </Form>

      <Button variant="primary" id="add-post-submit">
        {" "}
        Submit{" "}
      </Button>
    </div>
  );
};

export default MentorsCreate;