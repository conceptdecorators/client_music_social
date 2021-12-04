import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import * as FaIcons from "react-icons/fa";
import ImageOne from "../../img/zilah-log-small.png";

import { NavLink } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import NavbarMenu from "./NavbarMenu.css";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }
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
    <ul className="menuRight">
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
      {/* <ul className="navbar_menu">
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
          <a href="/upload" className="button">
            Upload
          </a>
        </li>
        <li className="navbar_btn">
          <a href="/blog" className="button">
            Blog
          </a>
        </li>
      </ul> */}
      <div className="header__middle__menus navbar_menu">
        <nav className="main-nav">
          {/* Responsive Menu Button */}
          {isResponsiveclose === true ? (
            <>
              <span
                className="menubar__button"
                style={{ display: "none" }}
                onClick={toggleClass}
              >
                {" "}
                <FiXCircle />{" "}
              </span>
            </>
          ) : (
            <>
              <span
                className="menubar__button"
                style={{ display: "none" }}
                onClick={toggleClass}
              >
                {" "}
                <FiAlignRight />{" "}
              </span>
            </>
          )}

          <ul className={boxClass.join(" ")}>
            <li className="menu-item">
              <NavLink
                exact
                activeClassName="is-active"
                onClick={toggleClass}
                to={`/`}
              >
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li className="menu-item ">
              <NavLink
                onClick={toggleClass}
                activeClassName="is-active"
                to={`/About`}
              >
                {" "}
                About{" "}
              </NavLink>{" "}
            </li>
            <li
              onClick={toggleSubmenu}
              className="menu-item sub__menus__arrows"
            >
              {" "}
              <Link to="/Services">
                {" "}
                Services <FiChevronDown />{" "}
              </Link>
              <ul className={boxClassSubMenu.join(" ")}>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Sync`}
                  >
                    {" "}
                    Sync{" "}
                  </NavLink>{" "}
                </li>
                <li>
                  {" "}
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Faq`}
                  >
                    {" "}
                    Faq{" "}
                  </NavLink>{" "}
                </li>
              </ul>
            </li>

            <li className="menu-item">
              <NavLink
                onClick={toggleClass}
                activeClassName="is-active"
                to={`/Upload`}
              >
                {" "}
                Upload{" "}
              </NavLink>{" "}
            </li>
            <li className="menu-item ">
              <NavLink
                onClick={toggleClass}
                activeClassName="is-active"
                to={`/Blog`}
              >
                {" "}
                Blog{" "}
              </NavLink>{" "}
            </li>
            <ul className="menuRight-Mobile">
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
          </ul>
        </nav>
      </div>
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
