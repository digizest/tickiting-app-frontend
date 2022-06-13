
import { Link } from "react-router-dom";

function AllTicketItem({ ticket }) {
  return (
    <div className="ticket">
      <div>{ticket._id}</div>
      <div>{new Date(ticket.createdAt).toLocaleString("en-US")}</div>
      <div>{ticket.Query}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
    </div>
  );
}

export default AllTicketItem;
