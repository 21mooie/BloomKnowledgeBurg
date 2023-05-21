import React, { useState, useEffect } from "react";
import firestoreDB from "../firebase/firestore.config";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Jobs() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [viewablePosts, setViewablePosts] = useState([]);

  useEffect(() => {
    async function getJobPosts() {
      console.log("getting jobs");
      const posts = [];
      const querySnapshot = await firestoreDB.getDocs("jobs");
      querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, data: doc.data() });
      });
      setViewablePosts(posts);
    }
    if (viewablePosts.length === 0) {
      setViewablePosts(getJobPosts());
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const _resp = await firestoreDB.addDoc("jobs", {
      title,
      post,
      replies: {},
    });

    window.location.reload();
  };
  return (
    <div>
      <h3 style={{ marginLeft: `40px` }}>Find your Career</h3>
      <h5 style={{ marginLeft: `30px` }}>Create a job opportunity</h5>
      <form onSubmit={submit}>
        <Form.Group>
          <Form.Label style={{ marginLeft: `20px` }}>Job Title</Form.Label>
          <Form.Control
            style={{ marginLeft: `20px` }}
            id="title"
            type="text"
            onChange={(event) => setTitle(event.target.value)}
          />
        </Form.Group>
        <Form.Label style={{ marginLeft: `20px` }}>Job Description</Form.Label>
        <FloatingLabel
          controlId="floatingTextarea2"
          style={{ marginLeft: `20px` }}
        >
          <Form.Control
            id="post"
            onChange={(event) => setPost(event.target.value)}
            as="textarea"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Button
          style={{
            marginLeft: `40px`,
            width: `20%`,
            marginTop: "20px",
            marginBottom: "20px",
          }}
          variant="success"
          type="submit"
        >
          Submit
        </Button>{" "}
      </form>
      <h4 className="" style={{ marginLeft: `40px` }}>
        Available Positions
      </h4>
      <ul>
        {viewablePosts.length > 0 &&
          viewablePosts?.map((doc, i) => (
            <ul key={i}>
              May 19, 2023 New York
              <h3 style={{ color: "gray", cursor: "pointer" }}>
                {" "}
                Job Position - {doc.data.title} - Hiring Now
              </h3>
              <br />
            </ul>
          ))}
      </ul>
    </div>
  );
}

export default Jobs;
