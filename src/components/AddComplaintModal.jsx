import React from "react";
import ComplaintForm from "./ComplaintForm";

const AddComplaintModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint submitted");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-out">
      <div
        className={`bg-white rounded-lg shadow-lg w-full max-w-lg p-4 transition-all transform ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-10"
        }`}
        style={{ transition: "transform 0.3s ease-out, opacity 0.3s ease-out" }}
      >
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-lg font-semibold">Add New Complaint</h2>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={onClose}
          >
            ✖
          </button>
        </div>
        <div className="pt-4">
          <ComplaintForm onSubmit={handleSubmit} onCancel={onClose} />
        </div>
      </div>
    </div>
  );
};

export default AddComplaintModal;
