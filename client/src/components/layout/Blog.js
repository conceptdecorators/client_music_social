import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { client } from "../../client";
import Posts from "../../components/blog/Posts";

import "./Blog.css";

const Blog = ({ isAuthenticated }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        setArticles(response.items);
      })
      .catch(console.error);
  }, []);
  
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <div className="App">
        <div className="container">
          <header>
            <div className="wrapper">
              <span>React and Content</span>
            </div>
          </header>
          <main>
            <div className="blog__page">
              <h1 className="blog__page__header">
                ZILAH MUSIC PUBLISHING NEWS
              </h1>
              <div className="blogs">
                <div className="wrapper">
                  <Posts posts={articles} />
                </div>
              </div>
            </div>
          </main>
        </div>
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
