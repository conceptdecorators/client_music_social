import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { client } from "../../client";
import Posts from "../../components/blog/Posts";

import "./Blog.css";
import BlogConnect from "./BlogConnect";

const Blog = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <div className="App">
        <BlogConnect />
      </div>
    </React.Fragment>
  );
};

Blog.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Blog);
