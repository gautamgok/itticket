import React, { useState } from "react";

const Acknowledgement = () => {
  const [formData, setFormData] = useState({
    comment: "",
    engineer: "",
    estimatedPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle acknowledgement submission
    console.log("Complaint acknowledged", formData);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Acknowledge Complaint</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Engineer</label>
          <select
            name="engineer"
            value={formData.engineer}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select Engineer</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Comment</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Add a comment"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Estimated Price</label>
          <input
            type="number"
            name="estimatedPrice"
            value={formData.estimatedPrice}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter estimated price"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => console.log("Cancelled")}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Submit Acknowledgement
          </button>
        </div>
      </form>
    </div>
  );
};

export default Acknowledgement;
