import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ImageOne from "../../img/zilah-log-small.png";
import { FaPlus } from "react-icons/fa";

const Faq = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <div class="main">
        <div class="service-container">
          <div class="sk-faq--light pb-160">
            <h3 class="sk-faq__header">Questions</h3>
            <div class="wrapper">
              {/* <!-- Accordion Heading One --> */}
              <div class="parent-tab">
                <input type="radio" name="tab" id="tab-1" checked />
                <label for="tab-1">
                  <span>When do I need a license?</span>
                  <div class="icon">
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
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing thelit.
                    Quam, repellendus facere, id porro magnam blanditiiss
                    quoteos dolores ratione quidem ipsam esse quos pariatur,
                    repellat obcaecati!
                  </p>
                </div>
              </div>

              {/* <!-- Accordion Heading Two --> */}
              <div class="parent-tab">
                <input type="radio" name="tab" id="tab-2" />
                <label for="tab-2">
                  <span>What does the license cover?</span>
                  <div class="icon">
                    <FaPlus
                      style={{
                        height: "20px",
                        width: "30px",
                        margin: "5px 0px",
                      }}
                    />
                  </div>
                </label>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing thelit.
                    Quam, repellendus facere, id porro magnam blanditiiss
                    quoteos dolores ratione quidem ipsam esse quos pariatur,
                    repellat obcaecati!
                  </p>
                </div>
              </div>

              {/* <!-- Accordion Heading Three --> */}
              <div class="parent-tab tab-3">
                <input type="radio" name="tab" id="tab-3" />
                <label for="tab-3" class="tab-3">
                  <span>Can I monetize my song? </span>
                  <div class="icon">
                    <FaPlus
                      style={{
                        height: "20px",
                        width: "30px",
                        margin: "5px 0px",
                      }}
                    />
                  </div>
                </label>
                <div class="content">
                  {/* <!-- Sub Heading One --> */}
                  <div class="child-tab">
                    <input type="checkbox" name="sub-tab" id="tab-4" />
                    <label for="tab-4">
                      <span>Sub Heading One</span>
                      <div class="icon">
                        <FaPlus
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "5px 0px",
                          }}
                        />
                      </div>
                    </label>
                    <div class="sub-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        thelit dolor. Utfacilis labore, exercitationem fuga
                        minima a illo modi vitaerse dignissimos? Vero?
                      </p>
                    </div>
                  </div>
                  {/* <!-- Sub Heading Two --> */}
                  <div class="child-tab">
                    <input type="checkbox" name="sub-tab" id="tab-5" />
                    <label for="tab-5">
                      <span>Sub Heading Two</span>
                      <div class="icon">
                        <FaPlus
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "5px 0px",
                          }}
                        />
                      </div>
                    </label>
                    <div class="sub-content">
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
              <div class="parent-tab">
                <input type="radio" name="tab" id="tab-6" />
                <label for="tab-6">
                  <span>How do I release my first track with Zilah?</span>
                  <div class="icon">
                    <FaPlus
                      style={{
                        height: "20px",
                        width: "30px",
                        margin: "5px 0px",
                      }}
                    />
                  </div>
                </label>
                <div class="content">
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
