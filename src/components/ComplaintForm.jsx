import React, { useState } from "react";

const ComplaintForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">Select Type</option>
          <option value="Software Issue">Software Issue</option>
          <option value="Hardware Issue">Hardware Issue</option>
          <option value="Network Issue">Network Issue</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          placeholder="Describe your issue"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Upload Image</label>
        <input
          type="file"
          onChange={handleImageChange}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ComplaintForm;
