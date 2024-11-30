import React, { useState } from "react";

const Acknowledgement = ({ tickets, isOpen, onClose }) => {
  const [selectedTicket, setSelectedTicket] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Acknowledge Ticket</h2>
        <form>
          {/* Dropdown for selecting a ticket */}
          <div className="mb-4">
            <label htmlFor="ticket" className="block text-sm font-medium text-gray-700">
              Select Ticket
            </label>
            <select
              id="ticket"
              value={selectedTicket}
              onChange={(e) => setSelectedTicket(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">-- Select Pending Ticket --</option>
              {tickets.map((ticket) => (
                <option key={ticket.id} value={ticket.id}>
                  {ticket.type} (Date: {ticket.date})
                </option>
              ))}
            </select>
          </div>

          {/* Comment Input */}
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
              Comment
            </label>
            <textarea
              id="comment"
              rows="3"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Add your comments here..."
            ></textarea>
          </div>

          {/* Engineer Assignment */}
          <div className="mb-4">
            <label htmlFor="engineer" className="block text-sm font-medium text-gray-700">
              Assign Engineer
            </label>
            <select
              id="engineer"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">-- Select Engineer --</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Acknowledgement;
