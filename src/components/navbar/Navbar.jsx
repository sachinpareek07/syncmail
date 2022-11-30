import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { syncEmails } from "../../api/emails";

const Navbar = () => {
  const [btnTxt, setBtnTxt] = useState("Sync Now");
  const { dispatch } = useContext(DarkModeContext);
  const userData = JSON.parse(sessionStorage.getItem("user"));

  const handleSync = async () => {
    setBtnTxt("Syncing...");
    
    try {
      await syncEmails();
      setBtnTxt("Synced");
      window.location.reload();
      // setTimeout(() => {
      //   setBtnTxt("Sync Now");
      // }, 2000);
    } catch (error) {
      alert(error);
      setBtnTxt("Sync Now");
    }
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <Button
            type="button"
            variant="outlined"
            onClick={handleSync}
            disabled={btnTxt === "Syncing..."}
          >
            {btnTxt} <SyncOutlinedIcon />
          </Button>
        </div>
        <div className="items">
          {/* <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div> */}
          <div className="item">
            {/* <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            /> */}
            {/* <span>{userData.firstName} {userData.lastName}</span> */}
            <span>{userData}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
