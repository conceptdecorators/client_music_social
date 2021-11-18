import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ImageTwo from "../../img/images/banners/3.png";

const About = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      {/* <!-- hero section --> */}
      <div class="main">
        <div class="main_container black-text">
          <div class="main_content">
            <div class="ld-fancy-heading mask-text col-lg-5">
              <p class="text-white font-size-21">
                <span
                  class="ld-fh-txt"
                  style={{
                    lineheight: "1.9em",
                  }}
                >
                  <span>
                    We place music in TV, Advertising, Film, and Video Games. We
                    make it easy to get your music heard by using our online
                    platform. We have established relationships with some of the
                    industries top entertainment companies, placing your music
                    directly to music supervisors, film, television, music
                    producer & video game companies from around the world.
                  </span>
                </span>
              </p>
            </div>
            {/* <!-- /.ld-fancy-heading --> */}
          </div>
          {/* <!--  main_content --> */}
          <div class="main_img-container">
            {/* <img src="assets\images\banners\3.png" alt="pic" id="main_img" /> */}
            <img src={ImageTwo} id="main_img" alt="logo" />
          </div>
        </div>
        <div class="service-container">
          <div
            id="text"
            class="text-white"
            style={{
              fontweight: "800",
            }}
          >
            MISSION
          </div>
          <p class="text-white medium-text pt-pb-160">
            {" "}
            We created our services from the beginning with you in mind. We
            provide the best high-quality sound recording music on demand for
            professional media production of any type. On our Zilah Music
            Publishing site you can find and license the right music for your
            individual production quickly just by browsing through our music
            selection. Everyone can find what he or she need in seconds- film
            directors, ad agencies, marketers, video game programmers etc.
            Review our collection for your business presentation, documentary,
            short film & run way fashion shows. Any one can find what there
            looking for their creative musical needs. On our website you will
            find all types of genres R&B Gospel Rock, Jazz, Blues. Our
            collection includes songs of soundscapes by passionate composers
            from around the world.
          </p>
        </div>
        {/* <!-- service-container --> */}
      </div>
      {/* <!--  main --> */}
    </React.Fragment>
  );
};

About.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(About);
