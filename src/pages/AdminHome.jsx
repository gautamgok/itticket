import React, { useState } from "react";
import TicketList from "../components/TicketList";
import Acknowledgement from "./Acknowledgement"

const AdminHome = () => {
  const [statusFilter, setStatusFilter] = useState("Pending");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy data for complaints
  const tickets = [
    { id: 1, type: "Software Issue", status: "Pending", date: "2024-11-15" },
    { id: 2, type: "Hardware Issue", status: "Acknowledged", date: "2024-11-14" },
    { id: 3, type: "Network Issue", status: "Pending", date: "2024-11-13" },
  ];

  // Filter complaints by status
  const filteredTickets = tickets.filter((ticket) => ticket.status === statusFilter);

  // Filter pending tickets
  const pendingTickets = tickets.filter((ticket) => ticket.status === "Pending");

  // Handle modal visibility
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
        <button
          onClick={openModal}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Acknowledge Tickets
        </button>
      </div>

      {/* Tabs for Status Filters */}
      <div className="mb-6 flex space-x-4">
        <button
          onClick={() => setStatusFilter("Pending")}
          className={`px-4 py-2 border rounded-lg ${statusFilter === "Pending" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"}`}
        >
          Pending
        </button>
        <button
          onClick={() => setStatusFilter("Acknowledged")}
          className={`px-4 py-2 border rounded-lg ${statusFilter === "Acknowledged" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"}`}
        >
          Acknowledged
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

      {/* Acknowledgement Modal */}
      {isModalOpen && (
        <Acknowledgement
          tickets={pendingTickets}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default AdminHome;
