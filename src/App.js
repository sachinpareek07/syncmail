import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import SiteRoutes from "./components/SiteRoutes";
import { Link } from "react-router-dom";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Link to="/" style={{ textDecoration: "none" }}>
        Dashboard
      </Link>
      <Link to="/inbox" style={{ textDecoration: "none" }}>
        <span>Inbox</span>
      </Link>
      <SiteRoutes />
    </div>
  );
}

export default App;
