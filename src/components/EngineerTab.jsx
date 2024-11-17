import React from "react";

const EngineerTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="mb-6 flex space-x-4">
      <button
        onClick={() => onTabChange("Assigned")}
        className={`px-4 py-2 border rounded-lg ${activeTab === "Assigned" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"}`}
      >
        Assigned
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

export default EngineerTabs;
