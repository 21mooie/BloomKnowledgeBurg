import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row, Button, Modal } from "react-bootstrap";
import { MdSupervisorAccount, MdOutlineMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import firestoreDB from "../firebase/firestore.config";
import profile from "../assets/profile.png";
import "./Mentors.css";

import mentorjpg from "../assets/mentor.jpg";
import submitJPG from "../assets/submit.jpg";
import eventsJpg from "../assets/events.jpg";
import signupjpg from "../assets/signup.jpg";

function Mentors() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [viewableMentors, setViewableMentors] = useState([]);
  const [selected_data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [images, setImages] = useState([
    "https://www.nippon.com/en/ncommon/contents/japan-topics/562750/562750.jpg",
    "https://miro.medium.com/v2/resize:fit:1400/0*aram6gZ0RX17PrLp",
    "https://media.istockphoto.com/id/1180522062/photo/woman-designer-creative-idea-website-designer-draw-outline-and-develop-applications-on.jpg?s=612x612&w=0&k=20&c=EyiFWvUMstW9HuSOJlJqJZBBbmQuh1fUaGtx-0XEUpw=",
    "https://wearetechwomen.com/wp-content/uploads/2020/10/shutterstock_1538502431.jpg",
    "https://media.istockphoto.com/id/613696940/photo/getting-to-grips-with-the-world-online.jpg?s=612x612&w=0&k=20&c=YHwFidQMd7RBLGokOj_WlrPqs9IM7jAtrooBMlCCs_s=",
    "https://t4.ftcdn.net/jpg/05/40/62/43/360_F_540624331_koFaCm57r3X4Vi7wdGmtthrw5oB0H6Ye.jpg"
  ]);
  const handleShow = (data) => {
    setShow(true);
    setData(data);
    console.log(data);
  };
  const handleClose = () => {
    setShow(false);
    setData(null);
  };

  useEffect(() => {
    async function getMentorPosts() {
      console.log("getting mentors");
      const mentors = [];
      const querySnapshot = await firestoreDB.getDocs("mentorship");
      querySnapshot.forEach((doc) => {
        mentors.push({ id: doc.id, data: doc.data() });
      });
      if (mentors.length > 6){
        let newImages = [...images];
        for(let i=images.length; i<mentors.length; i++){
          newImages.push(mentorjpg);
        }
        setImages(newImages);
      }
      setViewableMentors(mentors);
    }
    if (viewableMentors.length === 0) {
      setViewableMentors(getMentorPosts());
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const resp = await firestoreDB.addDoc("mentorship", {
      first_name,
      last_name,
      bio,
    });
    console.log(resp);
  };

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Find a Mentor</h3>
      <Link to="/mentors/create">
        <Button id={"btn-create"} variant="outline-success">
          <MdSupervisorAccount /> Become a Mentor
        </Button>
      </Link>

      <Container className="p-4">
        <Row lg={3}>
          {viewableMentors.length > 0 &&
            viewableMentors?.map((doc, i) => (
              // <li key={i}><Link to="/mentors">{doc.data.first_name}</Link></li>
              <Col className="d-flex gy-3" key={i}>
                <Card className="flex-fill" >
                  <Card.Img 
                    variant="top" 
                    src={images[i]} 
                    onError={(e) => { e.onerror = null; e.target.src=mentorjpg;}} 
                    className="image"
                  />
                  <Card.Body>
                    <Card.Title>
                      {doc.data.first_name} {doc.data.last_name}
                    </Card.Title>
                    <Card.Text>{doc.data.job_title}</Card.Text>

                    <Button
                      variant="primary"
                      onClick={() => handleShow(doc.data)}
                    >
                      View Bio
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
        {show && (
          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {selected_data.first_name} {selected_data.first_name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col>
                    <img src={profile} />
                  </Col>
                </Row>
                <Row>
                  <h4>
                    {selected_data.job_title} - {selected_data.company}
                  </h4>
                </Row>
                <Row>
                  <p>{selected_data.bio}</p>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() =>
                  (window.location = "mailto:afterboot@support.com")
                }
              >
                <MdOutlineMessage /> Connect
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </div>
  );
}

export default Mentors;
