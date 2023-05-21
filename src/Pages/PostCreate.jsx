import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import "./PostCreate.css";
import Modal from "react-bootstrap/Modal";

const PostCreate = () => {
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    console.log("submit");
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };

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

      <Button variant="primary" id="add-post-submit" onClick={handleSubmit}>
        {" "}
        Submit{" "}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostCreate;
