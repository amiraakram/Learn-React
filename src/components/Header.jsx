import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      
      <div className="logo">
        <span className="logo-main">MALCOM</span>
        <span className="logo-and">&</span>
        <span className="logo-sub">JONES</span>
      </div>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Who we are</a>
        <a href="#">Contact</a>
        <a href="#">Our Location</a>
      </nav>

      <button className="login-btn">Log In</button>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </header>
  );
}

export default Header;