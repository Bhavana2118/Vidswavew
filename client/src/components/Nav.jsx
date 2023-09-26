import React, { useState } from "react";
import "../../src/css/Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        VIDSWAVE
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="secureuploads">Upload</Link>
        </li>
        <li>
          <Link to="images">Videos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav