import React,{useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTickets,reset} from "../features/tickets/ticketSlice";
import Spinner from "./Spinner";


function SearchBar(){
const {AllTickets, isLoading, isSuccess }  = useSelector(
        (state) => state.tickets
      );

const [Query,setQuery] = useState("")

const dispatch = useDispatch();

useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getAllTickets());
    console.log("updated",AllTickets);
  }, [dispatch]);

  
  useEffect(() => {
    dispatch(getAllTickets());
    console.log("updated",AllTickets);
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  console.log("useEffect")

const handleChange = (event)=> {
const data = event.target.value;
console.log(data);
setQuery(data)

}
    return(
        <div>
            <div className="search">
                <input type="text" placeholder = "Search" value={Query} onChange={handleChange}/>
<i className="search icon"></i>
            </div>
        
      <h1>hiii</h1>
        </div>
    )
};

export default SearchBar;