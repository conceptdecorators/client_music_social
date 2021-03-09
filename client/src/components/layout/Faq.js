import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";

const Faq = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <div className="main">
        <div className="service-container">
          <div className="sk-faq--light pb-160">
            <h3 className="sk-faq__header">Questions</h3>
            <div className="wrapper">
              {/* <!-- Accordion Heading One --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-1" checked />
                <label for="tab-1">
                  <span>When do I need a license?</span>
                  <div className="icon">
                    <FaPlus
                      style={{
                        height: "20px",
                        width: "30px",
                        margin: "5px 0px",
                      }}
                      style={{
                        height: "20px",
                        width: "30px",
                        margin: "5px 0px",
                      }}
                    />
                  </div>
                </label>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing thelit.
                    Quam, repellendus facere, id porro magnam blanditiiss
                    quoteos dolores ratione quidem ipsam esse quos pariatur,
                    repellat obcaecati!
                  </p>
                </div>
              </div>

              {/* <!-- Accordion Heading Two --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-2" />
                <label for="tab-2">
                  <span>What does the license cover?</span>
                  <div className="icon">
                    <FaPlus
                      style={{
                        height: "20px",
                        width: "30px",
                        margin: "5px 0px",
                      }}
                    />
                  </div>
                </label>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing thelit.
                    Quam, repellendus facere, id porro magnam blanditiiss
                    quoteos dolores ratione quidem ipsam esse quos pariatur,
                    repellat obcaecati!
                  </p>
                </div>
              </div>

              {/* <!-- Accordion Heading Three --> */}
              <div className="parent-tab tab-3">
                <input type="radio" name="tab" id="tab-3" />
                <label for="tab-3" className="tab-3">
                  <span>Can I monetize my song? </span>
                  <div className="icon">
                    <FaPlus
                      style={{
                        height: "20px",
                        width: "30px",
                        margin: "5px 0px",
                      }}
                    />
                  </div>
                </label>
                <div className="content">
                  {/* <!-- Sub Heading One --> */}
                  <div className="child-tab">
                    <input type="checkbox" name="sub-tab" id="tab-4" />
                    <label for="tab-4">
                      <span>Sub Heading One</span>
                      <div className="icon">
                        <FaPlus
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "5px 0px",
                          }}
                        />
                      </div>
                    </label>
                    <div className="sub-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        thelit dolor. Utfacilis labore, exercitationem fuga
                        minima a illo modi vitaerse dignissimos? Vero?
                      </p>
                    </div>
                  </div>
                  {/* <!-- Sub Heading Two --> */}
                  <div className="child-tab">
                    <input type="checkbox" name="sub-tab" id="tab-5" />
                    <label for="tab-5">
                      <span>Sub Heading Two</span>
                      <div className="icon">
                        <FaPlus
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "5px 0px",
                          }}
                        />
                      </div>
                    </label>
                    <div className="sub-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        thelit dolor. Utfacilis labore, exercitationem fuga
                        minima a illo modi vitaerse dignissimos? Vero?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Accordion Heading Four --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-6" />
                <label for="tab-6">
                  <span>How do I release my first track with Zilah?</span>
                  <div className="icon">
                    <FaPlus
                      style={{
                        height: "20px",
                        width: "30px",
                        margin: "5px 0px",
                      }}
                    />
                  </div>
                </label>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing thelit.
                    Quam, repellendus facere, id porro magnam blanditiiss
                    quoteos dolores ratione quidem ipsam esse quos pariatur,
                    repellat obcaecati!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Faq.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Faq);
