import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    setUser({
      id: null,
      name: "",
      email: "",
      password: "",
      profilePic: "https://res.cloudinary.com/mytrainingschool/image/upload/v1661717512/ef0igyp7wj1zmwaqtyc0.jpg",
      isLoggedIn: false
    })

    navigate('/login')
  }

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user dropdown show mr-5">
          <span 
              className="dropdown-toggle"
              id="dropdownMenuLink" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false" 
            >
            <img
                src={user.profilePic}
                alt=""
              />
          </span>
          
          <span>{user.name}</span>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <button className="dropdown-item" onClick={handleLogout}>Logout</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
