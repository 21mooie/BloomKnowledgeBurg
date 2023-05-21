import React, { useState } from "react";
import { auth } from "../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import jsCookie from "js-cookie";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signInWithEmailAndPassword(auth, email, password);
    if (user) {
      console.log(user);
      jsCookie.set("token", user.user.accessToken);
      navigate("/");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 ">
      <form
        className=" w-50 container shadow p-4 rounded"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <h3 style={{ textAlign: "center" }}>Sign In</h3>
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
