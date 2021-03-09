import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Sync = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <div class="sync-image">
        <div class="hero-container" id="text">
          <h1>
            <span>Sync</span>
          </h1>
        </div>
      </div>
      <div class="main"></div>

      <div class="bg-color-blue">
        <div class="service-container pt-pb-160">
          <p class="text-white medium-text services-social pt-90" id="text">
            {" "}
            Synchronization Opportunities{" "}
          </p>
          <p class="text-white medium-text pt-90">
            {" "}
            We work to secure sync placements for our catalog of music to our
            network of skilled music supervisors within television film, media,
            content creators, games and more.{" "}
          </p>
        </div>

        <div class="service-container">
          <div
            id="text"
            class="text-white"
            style={{
              fontweight: "800",
            }}
          >
            Background Music
          </div>
          <p class="text-white medium-text pt-90">
            Zilah Music Publishing is a quick and easy way to license background
            music. We take the worry out so you don't have to waste time sifting
            through hours of music losing precious production time.Our music
            creative process for sync license is simple for licensors delivering
            the best match for your project.
          </p>
        </div>
        <div class="service-container pt-pb-160">
          <p class="text-white medium-text services-social">
            {" "}
            For artists, bands, composers, songwriters and labels{" "}
          </p>
          <p class="text-white medium-text pt-90">
            {" "}
            We place music in TV, Advertising, Film, and Video Games. We make it
            easy to get your music heard by using our online platform. We have
            established relationships with some of the industries top
            entertainment companies, placing your music directly to music
            supervisors, film, television, music producer & video game companies
            from around the world.{" "}
          </p>
          <p class="text-white medium-text pt-90">Listen On: </p>
          <p class="text-white medium-text pt-90">
            {" "}
            <AiFillInstagram />
            <span class="services-social">Instagram</span> <AiOutlineTwitter />
            <span class="services-social">Twitter</span> <AiFillYoutube />
            <span class="services-social">Youtube</span>{" "}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

Sync.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Sync);
