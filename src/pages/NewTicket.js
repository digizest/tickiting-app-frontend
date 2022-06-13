import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import { Modal, Button } from "react-bootstrap";

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  );
  const [show, setShow] = useState(false);
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [Query, setQuery] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      navigate("/tickets");
    }

    dispatch(reset());
  }, [dispatch, isError, isSuccess, navigate, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket({ Query, description }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="d-grid gap-2">
        <Button variant="secondary" size="lg" onClick={handleShow}>
          click to create new ticket
        </Button>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Create new Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <section className="form">
            <div className="form-group">
              <label htmlFor="name">Employe Name</label>
              <input type="text" className="form-control" value={name} disabled />
            </div>
            <div className="form-group">
              <label htmlFor="email">Employe Email</label>
              <input type="text" className="form-control" value={email} disabled />
            </div>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="Query">Query</label>
                <select
                  name="Query"
                  id="Query"
                  value={Query}
                  onChange={(e) => setQuery(e.target.value)}
                >
                  <option value="Laptop">Laptop</option>
                  <option value="Salary">Salary</option>
                  <option value="department">department</option>
                  <option value="project">project</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description of the issue</label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-block">Submit</button>
              </div>
            </form>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewTicket;

