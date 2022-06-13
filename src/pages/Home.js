import React from "react";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "../components/searchBar";


function Home() {
  return (
    <div>
      <section className="heading">
        <h1>Best Ticketing System for Operations Teams </h1>
        <p>Please choose from an option below</p>
      </section>
      <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Create New Ticket
      </Link>
      <Link to="/tickets" className="btn btn-block">
        <FaTicketAlt /> View My Ticket
      </Link>
      <Link to="/Alltickets" className="btn btn-block">
        <FaTicketAlt /> View All Tickets
      </Link>
      <SearchBar/>
    </div>
  );
}


export default Home;
