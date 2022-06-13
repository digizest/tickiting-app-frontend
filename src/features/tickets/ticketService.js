import axios from "axios";

const API_URL = "http://localhost:5000/ticket";

//Create new ticket
const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "/createTicket", ticketData, config);

  return response.data;
};

//Get All tickets
const getAllTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const resp = await axios.get(API_URL + "/getAllTickets", config);
console.log("resp9",resp);

if(resp['status'] === 200)
    {
      return resp['data'].result
    }else{
      return []
    }
};

//Get user tickets
const getTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const resp = await axios.get(API_URL + "/getTickets", config);
console.log("resp",resp);

if(resp['status'] == 200)
    {
      console.log("api resp 200" , resp['data'].tickets);
      return resp['data'].tickets
    }else{
      console.log("api resp error" , resp['status']);
      return []
    }
};

//Get user ticket
const getTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "/getTicket/" + ticketId, config);

  return response.data;
};

//Close ticket
const closeTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + "/updateTicket/" + ticketId,
    { status: "closed" },
    config
  );

  return response.data;
};

const ticketService = {
  createTicket,
  getTickets,
  getTicket,
  closeTicket,
  getAllTickets
};

export default ticketService;
