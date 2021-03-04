import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { client } from "../../client";
import Posts from "../../components/blog/Posts";
import ImageOne from "../../img/zilah-log-small.png";
import "./Blog.css";

const Blog = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const [articles] = useState(0);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        this.setState({
          articles: response.items,
        });
      })
      .catch(console.error);
  }, []);

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
              <h1 class="blog__page__header">ZILAH MUSIC PUBLISHING NEWS</h1>
              <div className="blogs">
                <div className="wrapper">
                  <Posts posts={this.state.articles} />
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
