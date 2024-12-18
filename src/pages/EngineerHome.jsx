import React, { useState } from "react";
import TicketList from "../components/TicketList";

const EngineerHome = () => {
  const [statusFilter, setStatusFilter] = useState("Assigned");

  // Dummy data for engineer tickets
  const tickets = [
    { id: 1, type: "Software Issue", status: "Assigned", date: "2024-11-15" },
    { id: 2, type: "Hardware Issue", status: "Completed", date: "2024-11-14" },
    { id: 3, type: "Network Issue", status: "Assigned", date: "2024-11-13" },
  ];

  // Filter complaints by status
  const filteredTickets = tickets.filter((ticket) => ticket.status === statusFilter);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Engineer Dashboard</h1>
      </div>

      {/* Tabs for Status Filters */}
      <div className="mb-6 flex space-x-4">
        <button
          onClick={() => setStatusFilter("Assigned")}
          className={`px-4 py-2 border rounded-lg ${statusFilter === "Assigned" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"}`}
        >
          Assigned
        </button>
        <button
          onClick={() => setStatusFilter("Completed")}
          className={`px-4 py-2 border rounded-lg ${statusFilter === "Completed" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"}`}
        >
          Completed
        </button>
      </div>

      {/* Ticket List */}
      <TicketList tickets={filteredTickets} />
    </div>
  );
};

export default EngineerHome;
