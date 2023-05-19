import React, {useState, useEffect} from 'react';
import firestoreDB from '../firebase/firestore.config';
import { Link } from "react-router-dom";

function Jobs() {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const [viewablePosts, setViewablePosts] = useState([]);

  useEffect(() => {
    async function getJobPosts() {
      console.log('getting jobs');
      const posts = []
      const querySnapshot = await firestoreDB.getDocs('jobs');
      querySnapshot.forEach((doc) => {
        posts.push({id: doc.id, data: doc.data()})
      });
      setViewablePosts(posts);
    }
    if(viewablePosts.length === 0){
      setViewablePosts(getJobPosts());
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const resp = await firestoreDB.addDoc('jobs', {title, post, replies: {}});
    console.log(resp);
  };
  return (
    <div>
      <h3>Welcome to jobs</h3>
      <p>Create post</p>
      <form onSubmit={submit}>
        <input id="title" onChange={(event) => setTitle(event.target.value)} placeholder="Title"/>
        <textarea id="post" onChange={(event) => setPost(event.target.value)}></textarea>
        <button type="submit">Submit</button>
      </form>
      <h4>Posts</h4>
      <ul>
        {
          viewablePosts.length > 0 &&
          viewablePosts?.map((doc, i) => (
            <li key={i}><Link to="/jobs">{doc.data.title}</Link></li>
          ))
        }
      </ul>
    </div>
  )
}

export default Jobs