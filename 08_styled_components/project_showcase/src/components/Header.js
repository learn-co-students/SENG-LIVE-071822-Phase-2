import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./shared";

const Wrapper = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  * {
    margin: 0 0.5rem;
  }
`

const Branding = styled.h1`
  display: flex;

  a {
    border-bottom: none;
    display: flex;
    align-items: center;
  }

  a:hover {
    border-bottom: none;
    background-color: transparent;
  }
`

const Logo = styled.span`
  color: var(--turquoise);
  font-size: 1.25em;
  font-family: Helvetica;
  margin-right: 0.5rem;
`

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <Wrapper>
      <Branding>
        <Link to="/">
          <Logo>{"//"}</Logo>
          Project Showcase
        </Link>
      </Branding>
      <nav>
        <Button as={NavLink} exact to="/projects">
          All Projects
        </Button>
        <Button as={NavLink} to="/projects/new">
          Add Project
        </Button>
        <Button as={NavLink} to="/about">
          About
        </Button>
        <Button onClick={onToggleDarkMode}>{buttonTextContent}</Button>
      </nav>
    </Wrapper>
  );
};

export default Header;
