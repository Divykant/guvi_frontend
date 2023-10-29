// import React, { useState } from "react";
// import "./Signup.css";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can add form validation and signup logic here
//     console.log(formData);
//   };

//   return (
//     <div className="signup-container">
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             autoComplete="off"
//             placeholder="Enter Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             autoComplete="off"
//             placeholder="Enter Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Enter Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             placeholder="Re-Enter Password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//       <p>already have an account ?</p>
//       <Link to="/login">Login</Link>
//     </div>
//   );
// };

// export default Signup;

import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRepassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation and signup logic here
    // console.log(name, email, password);
    axios
      .post(
        "http://localhost:3001/signup",
        {
          name,
          email,
          password,
          repassword,
        }.then((result) => console.log(result))
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Re-Enter Password"
            onChange={(e) => setRepassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>already have an account ?</p>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Signup;
