import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./PostCreate.css";

const PostCreate = () => {
  return (
    <div>
      <h4 id="header-create-post"> Create New Post</h4>
      <Form>
        <Form.Group
          className="mb-3 form-group"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label> Title </Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group
          className="mb-3 form-group"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>

        <Form.Group
          className="mb-3 form-group"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label> Tags (seperate by comma) </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Form>
      <Form.Group className="mb-3 form-group">
        <Form.Check type="switch" id="custom-switch" label="Anonymous Post" />
        <Form.Check type="switch" id="custom-switch" label="Stick on Top" />
      </Form.Group>

      <Button variant="primary" id="add-post-submit">
        {" "}
        Submit{" "}
      </Button>
    </div>
  );
};

export default PostCreate;
