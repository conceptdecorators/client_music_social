import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import ImageOne from "../../img/zilah-log-small.png";

const Layout = ({ children }) => (
  <React.Fragment>
    <div className="container">{children}</div>
  </React.Fragment>
);

export default Layout;
