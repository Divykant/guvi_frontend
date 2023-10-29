import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRepassword] = useState();
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== repassword) {
      setPasswordsMatch(false);
      return;
    } else {
      setPasswordsMatch(true);
    }
    navigate("/login");
    // console.log(name, email, password);
    axios
      .post(
        "http://localhost:3001/signup",
        {
          name,
          email,
          password,
          repassword,
        }.then((result) => {
          console.log(result);
          navigate("/login");
        })
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
        {!passwordsMatch && (
          <p className="password-mismatch">Passwords do not match.</p>
        )}
        <button type="submit">Sign Up</button>
      </form>
      <p>already have an account ?</p>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Signup;

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [repassword, setRepassword] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if passwords match
//     if (password !== repassword) {
//       setPasswordsMatch(false);
//       return;
//     } else {
//       setPasswordsMatch(true);
//     }

//     axios
//       .post("http://localhost:3001/signup", {
//         name,
//         email,
//         password,
//         repassword,
//       })
//       .then((result) => {
//         console.log(result);
//         navigate("/login");
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="signup-container">
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Other form fields as before */}
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Enter Password"
//             onChange={(e) => setPassword(e.target.value)}
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
//             onChange={(e) => setRepassword(e.target.value)}
//             required
//           />
//         </div>

//         {!passwordsMatch && (
//           <p className="password-mismatch">Passwords do not match.</p>
//         )}

//         <button type="submit">Sign Up</button>
//       </form>
//       <p>already have an account ?</p>
//       <Link to="/login">Login</Link>
//     </div>
//   );
// };

// export default Signup;
