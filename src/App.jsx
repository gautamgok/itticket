import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminHome from "./pages/AdminHome";
import EngineerHome from "./pages/EngineerHome";
// import ComplaintRegister from "./pages/ComplaintRegister";
// import Acknowledgement from "./pages/Acknowledgement";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ClientHome from "./pages/ClientHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/engineer" element={<EngineerHome />} />
        <Route path="/client" element={<ClientHome />} />
        {/* <Route path="/complaint-register" element={<ComplaintRegister />} /> */}
        {/* <Route path="/acknowledgement" element={<Acknowledgement />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
