import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="signup-container">
      <h2>More Info</h2>
      <form>
        <div className="form-group">
          <label htmlFor="confirmPassword">Nick Name</label>
          <input
            type="text"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Enter Nick Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Age</label>
          <input
            type="number"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter Age"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">DOB</label>
          <input
            type="number"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="DD/MM/YYYY"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mobile Number</label>
          <input
            type="number"
            id="password"
            name="password"
            placeholder="Enter Mobile number"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <Link to="/login">Log out</Link>
    </div>
  );
};

export default Home;
