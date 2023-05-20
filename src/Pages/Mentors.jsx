import React, {useState, useEffect} from 'react';
import {Container ,Card, Col, Row, Button, Modal} from 'react-bootstrap';
import { MdSupervisorAccount, MdOutlineMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import firestoreDB from '../firebase/firestore.config';
import profile from "../assets/profile.png";
import "./Mentors.css";

function Mentors() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [bio, setBio] = useState('');
  const [viewableMentors, setViewableMentors] = useState([]);
  const [selected_data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const handleShow = (data) => {
    setShow(true);
    setData(data);
    console.log(data)
  }
  const handleClose = () => {
    setShow(false);
    setData(null);
  }

  useEffect(() => {
    async function getMentorPosts() {
      console.log('getting mentors');
      const mentors = []
      const querySnapshot = await firestoreDB.getDocs('mentorship');
      querySnapshot.forEach((doc) => {
        mentors.push({id: doc.id, data: doc.data()})
      });
      setViewableMentors(mentors);
    }
    if(viewableMentors.length === 0){
      setViewableMentors(getMentorPosts());
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const resp = await firestoreDB.addDoc('mentorship', {first_name, last_name, bio});
    console.log(resp);
  };

  return (
    <div>
        <h3>Find a Mentor</h3>
        <Link to="/mentors/create">
            <Button id={"btn-create"} variant="outline-success">
                <MdSupervisorAccount /> Become a Mentor
            </Button>
        </Link>

        <Container className='p-4'>
            <Row lg={3}>
            {
            viewableMentors.length > 0 &&
            viewableMentors?.map((doc, i) => (
                // <li key={i}><Link to="/mentors">{doc.data.first_name}</Link></li>
                <Col className="d-flex">
                    <Card className="flex-fill" key={i}>
                        <Card.Img variant="top" src={profile}/>
                        <Card.Body>
                        <Card.Title>{doc.data.first_name} {doc.data.last_name}</Card.Title>
                        <Card.Text>{doc.data.job_title}</Card.Text>

                        <Button variant="primary" onClick={() => handleShow(doc.data)}>View Bio</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))
            }
            </Row>
            {show && 
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                <Modal.Title>{selected_data.first_name} {selected_data.first_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col><img src={profile} /></Col>
                        </Row>
                        <Row><h4>{selected_data.job_title} - {selected_data.company}</h4></Row>
                        <Row><p>{selected_data.bio}</p></Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => window.location="mailto:afterboot@support.com"}>
                    <MdOutlineMessage /> Connect
                </Button>
                </Modal.Footer>
            </Modal>} 

        </Container>
    </div>
  )
}

export default Mentors