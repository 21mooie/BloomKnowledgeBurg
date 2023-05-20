import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { RxAvatar } from "react-icons/rx";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import MockTextContent from "../mock/MockTextContent";
import { Badge } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { AiOutlineShareAlt } from "react-icons/ai";
import { SlCheck } from "react-icons/sl";
import { useEffect } from "react";

const PostDetail = () => {
  // THIS (useEffect) IS A WORKAROUND TO A BUG :
  // BUG : when enter this page the browser auto position the page (scrolled) to the middle in stead of top of the page
  // TODO : Find another solution
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const routeParams = useParams();
  const postID = +routeParams.id;
  // TODO: Grab the item by ID

  return (
    <>
      {" "}
      <Card style={{ width: "70%", marginLeft: "15%" }}>
        <Card.Header>
          {" "}
          <Breadcrumb>
            <Breadcrumb.Item href="#">Posts</Breadcrumb.Item>
            <Breadcrumb.Item active>Article</Breadcrumb.Item>
          </Breadcrumb>
          <RxAvatar /> Terry Wu
          <span style={{ color: "gray" }}>
            {" "}
            Written: 2023-05-05 08:23 | Views: 453{" "}
          </span>
        </Card.Header>
        <Card.Body>
          <Badge pill bg="warning" text="dark">
            Original
          </Badge>{" "}
          <Card.Title
            style={{
              fontSize: "30px",
              fontFamily: "sans-serif",
              padding: "20px 0 20px 0",
              textAlign: "center",
            }}
          >
            How To Be Successful In An Interview FAANG
          </Card.Title>
          <Card.Text>
            <MockTextContent />
          </Card.Text>
          <Button variant="outline-success">
            {" "}
            <AiOutlineShareAlt /> Share
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">15 days ago</Card.Footer>
        <Card.Body>
          {" "}
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Enter comments here"
            style={{ marginTop: "30px" }}
          >
            <Form.Control
              as="textarea"
              placeholder="e"
              style={{ height: "200px" }}
            />
          </FloatingLabel>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "40px",
              marginTop: "20px",
            }}
          >
            <Form.Control type="email" placeholder="email" />
            <Form.Control type="text" placeholder="name" />
            <Button variant="outline-success">
              {" "}
              <SlCheck />
              Post
            </Button>
          </div>
        </Card.Body>
        <br />
        <br />
      </Card>
    </>
  );
};

export default PostDetail;
