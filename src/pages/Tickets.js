import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import TicketItem from "../components/TicketItem";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import ReactPaginate from "react-paginate";

function Tickets() {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );
  const [pageNumber, setPageNumber] = useState(0);
  const dispatch = useDispatch();
  console.log("ticket aa gye")

  useEffect(() => {
    console.log("useEffect k andar")
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
    console.log("updated", tickets);
  }, [dispatch]);


  useEffect(() => {
    dispatch(getTickets());
    console.log("updated", tickets);
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  console.log("useEffect")

  const ticketsPerPage = 10;
  const pageVisited = pageNumber * ticketsPerPage;
  const displayTickets = tickets.slice(pageVisited, pageVisited + ticketsPerPage)
    .map((ticket) => (
      <TicketItem key={ticket._id} ticket={ticket} />
    ))

  const pageCount = Math.ceil(tickets.length / ticketsPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div>
      <div>
        <BackButton url="/" />
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
        />
      </div>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Query</div>
          <div>Status</div>
          <div>view</div>
        </div>
        <div>

          {(tickets.length === 0) ? <h1>No ticket found</h1> : <div>{displayTickets}</div>}

        </div>
      </div>
      <footer>
        <br></br>
      </footer>
    </div>
  );
}

export default Tickets;
