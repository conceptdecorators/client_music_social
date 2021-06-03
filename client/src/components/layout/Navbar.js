import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import * as FaIcons from "react-icons/fa";
import ImageOne from "../../img/zilah-log-small.png";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Artists</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user"></i>{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Artists</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link
          to="/login"
          style={{
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            padding: "10px 20px",
            height: "100%",
            width: "100%",
            border: "none",
            outline: "none",
            borderRadius: "4px",
            background: "#ff9800",
            color: "#fff",
          }}
        >
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <h1>
        <Link to="/">
          {/* <i className="fas fa-code"></i> DevConnector */}
          <img src={ImageOne} className="logo-dark" alt="logo" />
        </Link>
      </h1>
      <ul className="navbar_menu">
        <li className="navbar_item">
          <a href="/" className="navbar_links">
            {" "}
            Home{" "}
          </a>
        </li>
        <li className="navbar_item">
          <a href="/services" className="navbar_links">
            {" "}
            Services{" "}
          </a>
        </li>
        <li className="navbar_item">
          <a href="/sync" className="navbar_links">
            {" "}
            Sync{" "}
          </a>
        </li>
        <li className="navbar_item">
          <a href="/about" className="navbar_links">
            {" "}
            About{" "}
          </a>
        </li>
        <li className="navbar_item">
          <a href="/tech" className="navbar_links">
            {" "}
            Artist{" "}
          </a>
        </li>
        <li className="navbar_btn">
          <a href="/blog" className="button">
            Blog
          </a>
        </li>
      </ul>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
