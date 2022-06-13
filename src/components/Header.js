import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";


function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"><b>Ticket Generator</b></Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt />
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              
              <Link to="/login">
              <button className="btn">
                <FaSignInAlt /> Login
                </button>
              </Link>
             
            </li>
            <li>
              <Link to="/register">
              <button className="btn">
                <FaUser /> Register
                </button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
