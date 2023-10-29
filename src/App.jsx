import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
//npm run dev client
//npm start sserver
export default App;
