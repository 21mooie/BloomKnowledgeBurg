import React, {useState, useEffect} from 'react';
import {Container ,Card, Col, Row, Button} from 'react-bootstrap';  
import firestoreDB from '../firebase/firestore.config';
import { Link } from "react-router-dom";

function Mentors() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [bio, setBio] = useState('');
  const [viewableMentors, setViewableMentors] = useState([]);

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
        <p>Become a Mentor</p>
        <form onSubmit={submit}>
            <input id="first_name" onChange={(event) => setFirstName(event.target.value)} placeholder="First Name"/>
            <input id="last_name" onChange={(event) => setLastName(event.target.value)} placeholder="Last Name"/>
            <textarea id="bio" onChange={(event) => setBio(event.target.value)} placeholder="Bio"></textarea>
            <button type="submit">Submit</button>
        </form>

        <Container className='p-4'>
            <Row lg={3}>
            {
            viewableMentors.length > 0 &&
            viewableMentors?.map((doc, i) => (
                // <li key={i}><Link to="/mentors">{doc.data.first_name}</Link></li>
                <Col className="d-flex">
                    <Card className="flex-fill" key={i}>
                        <Card.Img variant="top" src={"#"} />
                        <Card.Body>
                        <Card.Title>{doc.data.first_name} {doc.data.last_name}</Card.Title>
                        <Card.Text>{doc.data.job_title}</Card.Text>
                        
                        <Button variant="primary">Connect</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))
            }
            </Row>
        </Container>
    </div>
  )
}

export default Mentors
