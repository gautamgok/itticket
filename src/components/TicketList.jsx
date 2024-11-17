import React from "react";

const TicketList = ({ tickets }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-600 text-sm">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="text-gray-700">
              <td className="py-2 px-4 border-b text-center">{ticket.id}</td>
              <td className="py-2 px-4 border-b">{ticket.type}</td>
              <td className="py-2 px-4 border-b">{ticket.status}</td>
              <td className="py-2 px-4 border-b">{ticket.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketList;
