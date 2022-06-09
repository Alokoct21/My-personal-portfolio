import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import { Reorder } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {" "}
          <Reorder />{" "}
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/education"> Education </Link>
      </div>
    </div>
  );
}

export default Navbar;
