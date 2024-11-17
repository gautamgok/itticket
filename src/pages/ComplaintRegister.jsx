import React, { useState } from "react";
import ComplaintForm from "../components/ComplaintForm";

const ComplaintRegister = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, for example, save complaint to database
    console.log("Complaint registered");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Register a Complaint</h2>
      <ComplaintForm onSubmit={handleSubmit} onCancel={() => console.log("Cancelled")} />
    </div>
  );
};

export default ComplaintRegister;
