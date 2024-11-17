import React, { useState } from "react";
import AddComplaintModal from "../components/AddComplaintModal";
import TicketList from "../components/TicketList";

const ClientHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  // Dummy data for old tickets
  const tickets = [
    { id: 1, type: "Software Issue", status: "Pending", date: "2024-11-15" },
    { id: 2, type: "Hardware Issue", status: "Acknowledged", date: "2024-11-14" },
    { id: 3, type: "Network Issue", status: "Completed", date: "2024-11-13" },
  ];

  // Filter and Sort tickets
  const filteredTickets = tickets.filter((ticket) =>
    statusFilter === "all" ? true : ticket.status === statusFilter
  );

  const sortedTickets = filteredTickets.sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date); // Sort by date (desc)
    } else if (sortBy === "type") {
      return a.type.localeCompare(b.type); // Sort by type (asc)
    }
    return 0;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">My Tickets</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700"
        >
          Add Complaint
        </button>
      </div>

      {/* Filters and Sorting */}
      <div className="mb-6 flex space-x-4">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg bg-white"
        >
          <option value="all">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Acknowledged">Acknowledged</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded-lg bg-white"
        >
          <option value="date">Sort by Date</option>
          <option value="type">Sort by Type</option>
        </select>
      </div>

      {/* Ticket List */}
      <TicketList tickets={sortedTickets} />

      {/* Add Complaint Modal */}
      <AddComplaintModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ClientHome;
