import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">JobBoard</div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/">Jobs</Link>
        <Link to="/">Contact</Link>
        <Link to="/post-job" className="post-btn">Post a Job</Link>
      </nav>
    </header>
  );
}

export default Header;
