import React from "react";

const AdminTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="mb-6 flex space-x-4">
      <button
        onClick={() => onTabChange("Pending")}
        className={`px-4 py-2 border rounded-lg ${activeTab === "Pending" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"}`}
      >
        Pending
      </button>
      <button
        onClick={() => onTabChange("Acknowledged")}
        className={`px-4 py-2 border rounded-lg ${activeTab === "Acknowledged" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"}`}
      >
        Acknowledged
      </button>
      <button
        onClick={() => onTabChange("Completed")}
        className={`px-4 py-2 border rounded-lg ${activeTab === "Completed" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"}`}
      >
        Completed
      </button>
    </div>
  );
};

export default AdminTabs;
