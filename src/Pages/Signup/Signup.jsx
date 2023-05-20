import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase/firebase.config";
import jsCookie from "js-cookie";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [file, setFile] = useState();
  const [error, setError] = useState();
  const [errorStatus, setErrorStatus] = useState();

  // handling changed in user input

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // handling the file that will be uploaded
  const handleFileInput = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      if (newUser) {
        // creating a ref of the storage
        const storageRef = ref(storage, newUser.user.uid);
        // uploading the file to the bucket
        uploadBytesResumable(storageRef, file).then((data) => {
          getDownloadURL(data.ref).then(async (downloadURL) => {
            updateProfile(newUser.user, {
              displayName: `${user.firstName}`,
              photoURL: downloadURL,
            });
            setErrorStatus(200);
            setError("Account Created");
            // create a collection
            await setDoc(doc(db, "users", newUser.user.uid), {
              uid: newUser.user.uid,
              displayName: `${user.firstName} ${user.lastName}`,
              email: user.email,
              photoURL: downloadURL,
            });

            // creating user chat data
            jsCookie.set("token", newUser.user.accessToken);
            navigate("/");
          });
        });
      }
    } catch (error) {
      console.log(error);
    }
  };




  
  return (
    <div className="signup__window border rounded p-5 container">
      <h1 className="text-center">Register </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="email">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            className="form-control"
            id="profilePicture"
            name="profilePicture"
            onChange={handleFileInput}
          />
        </div>

        <button type="submit" className="btn mt-3 btn-primary">
          Sign Up
        </button>
        {/* error */}

        <p className="text-muted mt-3">
          Already have an account{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
