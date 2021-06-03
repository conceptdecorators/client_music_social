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
          <div className="sk-faq--light pt-pb-160">
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
                    The music license is the "license", "license agreement" and
                    or ``synchronisation" is the contract that allows you to
                    use, reproduce music in a synchronised way for your
                    production.
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
                    The license only covers licensed music agreements from right
                    holders. It does not cover public performances royalties,
                    which are paid by broadcaster, cable,
                    content,commercials,podcast,video on demand,distributor,
                    publishing or manufacturer.
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
                      <span>Music Monetization:</span>
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
                        Yes. We maximize your music revenue based on your sound
                        recordings and composition through traditional and
                        non-traditional revenue streams.
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

                  {/* <!-- Sub Heading Three --> */}
                  <div className="child-tab">
                    <input type="checkbox" name="sub-tab" id="tab-7" />
                    <label for="tab-7">
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
                <input type="radio" name="tab" id="tab-8" />
                <label for="tab-8">
                  <span>Will you tell me when my music is licensed?</span>
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
                    You will be notified on your quarterly performance rights
                    royalty payment statement.
                  </p>
                </div>
              </div>
              {/* <!-- Accordion Heading Five --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-9" />
                <label for="tab-9">
                  <span>Do I need Permission for a License?</span>
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
                    Yes. Getting a music license is the primary way you protect
                    yourself legally if you want to use a copyrighted song.It is
                    Illegal for you to use someone else's music without the
                    right holder's permission.The music license is legitimate
                    document that grants you the right to use,reproduce music
                    for your own purpose for a fee.
                  </p>
                </div>
              </div>
              {/* <!-- Accordion Heading Six --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-10" />
                <label for="tab-10">
                  <span>When do I need a license for my business ?</span>
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
                    If your business is a club, music venue or anywhere where
                    commercial music is played on a day-to-day basis.This means
                    they are licensed for private, non-commercial use (perfect
                    to use at home with your friends & family).You also need a
                    Public Performance License (PPL) to play music in public
                    places.
                  </p>
                </div>
              </div>
              {/* <!-- Accordion Heading Seven --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-11" />
                <label for="tab-11">
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
                    The license only covers licensed music agreements from right
                    holders. It does not cover public performances royalties,
                    which are paid by broadcaster, cable,
                    content,commercials,podcast,video on demand,distributor,
                    publishing or manufacturer.
                  </p>
                </div>
              </div>
              {/* <!-- Accordion Heading Eight --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-12" />
                <label for="tab-12">
                  <span>Does Zilah Music Publishing own my music?</span>
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
                    No. rightsholder owns 100% of ownership of musical
                    composition or creative control over your songs we just
                    administer .
                  </p>
                </div>
              </div>
              {/* <!-- Accordion Heading Nine --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-13" />
                <label for="tab-13">
                  <span>
                    Do I need a License for TV Film and other forms of media?
                  </span>
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
                    Yes, you will need a license for content,TV, film,
                    documentary,website, virtual reality etc..
                  </p>
                </div>
              </div>
              {/* <!-- Accordion Heading Ten --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-14" />
                <label for="tab-14">
                  <span>How long is the license valid for?</span>
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
                    It's based on the terms of the license mentioned in the
                    license agreement. It depends on the type of your production
                    (use).
                  </p>
                </div>
              </div>

              {/* <!-- Accordion Heading Eleven --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-15" />
                <label for="tab-15">
                  <span>
                    Is all the music on Zilah Music Publishing pre-cleared?
                  </span>
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
                    The majority of music on Zilah Music Publishing is
                    pre-cleared. We have developed a way for you to connect with
                    musicians and artists directly to licensors with a license
                    request.
                  </p>
                </div>
              </div>
              {/* <!-- Accordion Heading Twelve --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-16" />
                <label for="tab-16">
                  <span>Who do I sign the license agreement with?</span>
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
                  <p>The license agreement between you and the licensor.</p>
                </div>
              </div>
              {/* <!-- Accordion Heading Thirteen --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-17" />
                <label for="tab-17">
                  <span>
                    Is the agreement exclusive or non-exclusive license to my
                    music?
                  </span>
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
                  <p>We have both non-exclusives and exclusive agreements.</p>
                </div>
              </div>
              {/* <!-- Accordion Heading Fourteen --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-18" />
                <label for="tab-18">
                  <span>Can I share the music I purchased with others?</span>
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
                    No. All music must be copyrighted and can ONLY be used
                    within the terms of the license agreement. Sharing with
                    others is illegal.
                  </p>
                </div>
              </div>
              {/* <!-- Accordion Heading Fiveteen --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-19" />
                <label for="tab-19">
                  <span>
                    Can I use music I purchased in one of my other productions?{" "}
                  </span>
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
                    No.You can only use the license you purchased per production
                    project. Using this license with another production is
                    illegal.
                  </p>
                </div>
              </div>

              {/* <!-- Accordion Heading Sixteen --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-20" />
                <label for="tab-20">
                  <span>What is a Mechanical License? </span>
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
                    A mechanical license grants you the right to reproduce and
                    distribute musical works onto CDs, DVDs, recordings,
                    tapes,ringtones,digital download,interactive streams and
                    other digital configurations,including locker-based music
                    services and bundled music offerings. (Non-mechanical
                    reproduction includes such things as making sheet music, for
                    which royalties are paid by the publisher to the composer.)
                  </p>
                </div>
              </div>

              {/* <!-- Accordion Heading Seventeen --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-21" />
                <label for="tab-21">
                  <span>
                    Do Zilah Music Publishing have publishing services?{" "}
                  </span>
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
                    Yes, we provide administrative services to
                    artists,musicians, publishers,record labels, independent and
                    unpublished songwriters,including managing your catalog and
                    collecting royalties within a global administration network.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sk-faq--light pt-pb-160">
            <h3 className="sk-faq__header">Song Protection</h3>
            <div className="wrapper">
              {/* <!-- Accordion Heading Eighteen --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-22" checked />
                <label for="tab-22">
                  <span>US Copyright Registration</span>
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
                    We will submit your copyright,song title & digital
                    performance registration. You can register up to 10
                    unpublished music works.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sk-faq--light pt-pb-160">
            <h3 className="sk-faq__header">Usage</h3>
            <div className="wrapper">
              {/* <!-- Accordion Heading Nineteen --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-23" checked />
                <label for="tab-23">
                  <span>What can I use the music for?</span>
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
                    Your music license can be used for TV,film, features
                    content,radio,video games advertisements,websites, DVD,
                    venues,virtual reality, corporate presentations.
                  </p>
                </div>
              </div>

              {/* <!-- Accordion Heading Twenty --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-24" checked />
                <label for="tab-24">
                  <span>
                    Can I include the music in the trailer of my production?
                  </span>
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
                    Yes,as long as you have the right to use it to perform the
                    music at venues and in production, promos, trailers,
                    adverts, virtual reality, podcasts.
                  </p>
                </div>
              </div>
              {/* <!-- Accordion Heading TwentyOne --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-25" checked />
                <label for="tab-25">
                  <span>Zilah Music Publishing Collects Administration </span>
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
                    While Zilah Music Publishing administrator services collects
                    royalties and licensing fees on your behalf and charges a
                    commission fee for their services. <br /> Performance rights
                    organizations 50% <br /> Mechanical rights 25% <br /> Direct
                    Licensing 25%
                  </p>
                </div>
              </div>

              {/* <!-- Accordion Heading TwentyThree --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-26" checked />
                <label for="tab-26">
                  <span>Music Licensing Terms</span>
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
                    Our terms are straight-forward:
                    <br />
                    Exclusive 60%. <br /> Non-exclusive 35% <br />
                    Zilah Music pay-outs are made monthly for licensors via
                    Paypal- you must have a minimum of $50 in order for a
                    pay-out to be made.
                  </p>
                </div>
              </div>
              {/* <!-- Accordion Heading TwentyFour --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-27" checked />
                <label for="tab-27">
                  <span>Music Rates</span>
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
                  <p>Rates for licensees vary based on project to project.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sk-faq--light pt-pb-160">
            <h3 className="sk-faq__header">PRICE POLICY</h3>
            <div className="wrapper">
              {/* <!-- Accordion Heading Nineteen --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-28" checked />
                <label for="tab-28">
                  <span>How much does a license cost?</span>
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
                    A price license is calculated based on the usage on how the
                    music will be used and may vary from one track to another.
                    Contact representative about pricing policy availability.
                  </p>
                </div>
              </div>

              {/* <!-- Accordion Heading Twenty --> */}
              <div className="parent-tab">
                <input type="radio" name="tab" id="tab-29" checked />
                <label for="tab-29">
                  <span>Quality Requirement</span>
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
                    Our quality requirements are straight-forward: Zilah Music
                    Publishing meticulous viewing process. Each track is
                    examined to the next initial stage of completion to ensure
                    consistency in the review process in the house system in
                    various areas:
                    <br />
                    Overall production quality <br />
                    Musicianship <br />
                    Musical reconceptualization arrangement
                    <br />
                    Quality of instruments/samples <br />
                    Standard audio & musical performance <br />
                    Commercial relevance / usability
                    <br />
                    <br />
                    In order for your music to be considered and accepted for
                    usage on Zilah Music Publishing must meet our standards.
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
