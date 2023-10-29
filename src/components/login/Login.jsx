import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation and signup logic here
    // console.log(name, email, password);
    axios
      .post(
        "http://localhost:3001/login",
        {
          email,
          password,
        }.then((result) => {
          console.log(result);
          if (result.data === "success") {
            navigate("/home");
          }
          navigate("/home");
        })
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
      <p>not registered ?</p>
      <Link to="/signup">signup</Link>
    </div>
  );
};

export default Login;
