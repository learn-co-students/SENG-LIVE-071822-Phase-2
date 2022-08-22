import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <h1 className="branding">
        <Link to="/"><span className="logo">{"//"}</span>
          Project Showcase
        </Link>
      </h1>
      <nav>
        <div className="navigation">
          <NavLink className="button" to="/projects">
            All Projects
          </NavLink>
          <NavLink className="button" to="/projects/new">
            Add Project
          </NavLink>
          <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
