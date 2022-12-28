import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      
      <div className="topCenter">
        <div className="topList">
          <p className="topListItem">
            <Link className="link" to="/login">
              HOME
            </Link>
          </p>
          
          <p className="topListItem">
            <Link className="link" to="/login">
              MYBLOGS
            </Link>
          </p>
          <p className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </p>
          <p className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </p>
        </div>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            {/* <img className="topImg" src={PF+user.profilePic} alt="" /> */}
          </Link>
        ) : (
          <div className="topList">
            <p className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </p>
            <p className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </p>
          </div>
        )}
        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  );
}
