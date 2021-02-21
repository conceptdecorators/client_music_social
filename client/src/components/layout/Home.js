import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ImageOne from "../../img/images/banners/4.png";
import ImageTwo from "../../img/images/banners/artist_hero_1.png";
import ImageThree from "../../img/images/album-website/Greta Van Fleet- Black Smoke Rising.jpg";
import ImageFour from "../../img/images/album-website/Ruel – Dazed & Confused.jpg";

import ImageFive from "../../img/images/album-website/Dua Lipa - Unreleased.jpg";
import ImageSix from "../../img/images/album-website/Peng_Black_Girls.jpg";
import ImageSeven from "../../img/images/album-website/LUCKY DAYE FT CHRONIXX & MEDISUN - ROLL SOME MO.jpg";
import ImageEight from "../../img/images/album-website/Charles Bradley - Changes.jpg";
import ImageNine from "../../img/images/banners/multimedia-icon-upload-orange-shadow.png";
import ImageTen from "../../img/images/banners/multimedia-icon-upload-2-orange.png";
import ImageEleven from "../../img/images/banners/multimedia-icon-upload-2-orange.png";
import ImageTwelve from "../../img/images/banners/artist_hero_2.png";

const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    // <section className="landing">
    //   <div className="dark-overlay">
    //     <div className="landing-inner">
    //       <h1 className="x-large">Developer Connector</h1>
    //       <p className="lead">
    //         Create a developer profile/portfolio, share posts and get help from
    //         other developers
    //       </p>
    //       <div className="buttons">
    //         <Link to="/register" className="btn btn-primary">
    //           Sign Up
    //         </Link>
    //         <Link to="/login" className="btn btn-light">
    //           Login
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <React.Fragment>
      <div class="main">
        <div class="main_container black-text">
          <div class="main_content">
            {/* <h2 id="text">THE FUTURE
            OF<br>
            <span>MUSIC</span>  
											<span>ART</span>
											<span>TALENT</span>
                      <span>PUBLISHING</span>
        </h2> */}

            <div class="ld-fancy-heading mask-text col-lg-5">
              <p
                class="text-white font-size-21"
                data-split-text="true"
                data-split-options='{ "type": "words" }'
              >
                <span
                  class="ld-fh-txt"
                  style="
            line-height: 1.9em;"
                >
                  <span>
                    Zilah Music Publishing is a licensing & publishing company.
                    We represent the works of composers, music producers, indie
                    bands, singers and rappers. Zilah Music Publishing works
                    with music libraries for TV, ad agencies, video games, film
                    & television. We also represent a growing roster of
                    celebrity talent.{" "}
                  </span>
                </span>
              </p>
            </div>
            {/* <!-- /.ld-fancy-heading --> */}

            <div class="ld-fancy-heading">
              <p class="text-white font-size-18">
                <span class="inner-text">
                  <i
                    class="bx bxl-youtube fa-2x mr-3 mb-4"
                    style="color:#ffffff"
                  ></i>
                  <span class="opacity-06">PLAY</span>
                </span>
              </p>
            </div>
            {/* <!-- <button class="main_btn"><a href="/">Get Started</a></button> --> */}
          </div>
          <div class="main_img-container">
            <ImageOne alt="pic" class="rotate" id="main_img" />
            {/* <img src="assets/images/banners/4.png" alt="pic" class="rotate" id="main_img" /> */}
          </div>
        </div>
      </div>
      {/* <!-- Release your music 
around the world --> */}
      <div class="music-push">
        <div class="main_container black-text">
          <div class="main_content mobile-margin">
            <div class="ld-fancy-heading mask-text col-lg-5">
              <p
                class="text-white font-size-21 black-text"
                data-split-text="true"
                data-split-options='{ "type": "words" }'
              >
                <span
                  class="ld-fh-txt"
                  style="
            line-height: 1.9em;"
                >
                  <div class="music-push__content">
                    <h2 class="inside-text">
                      Release your music around the world
                    </h2>
                    <p class="black-text">
                      We’ve made it easy to stream and sell your songs on the
                      world’s biggest music platforms. Reach more fans. Push
                      your music further.
                    </p>
                    {/* <!-- <button class="music-push__btn"><a href="#">Schedule Call</a></button> --> */}
                    {/* </a> */}
                  </div>
                </span>
              </p>
            </div>
            {/* <!-- /.ld-fancy-heading --> */}
          </div>
          <div class="main_img-container">
            <img
              src="assets\images\banners\artist_hero_1.png"
              alt="pic"
              id="artist_img"
            />
          </div>
        </div>
      </div>

      {/* // <!-- Try-Now Banner --> */}
      <section class="try-now">
        <div class="container-1">
          <div class="box-1">
            <h2 class="promo-seller_content_title">Try Now</h2>
          </div>
          <div class="box-2">
            <p class="promo-seller_content_title">
              <span class="btn-txt round btn btn-light btn-bordered">
                Get started
              </span>
            </p>
          </div>
        </div>
      </section>
      <section class="vc_row pt-pb-160">
        <div class="container">
          <div class="row">
            <div class="flex-row lqd-column mb-5 mb-md-0 ca-initvalues-applied lqd-animations-done pt-90">
              <div class="cards mobile-margin">
                <ImageThree alt="" class="card__image" />
                <ImageFour alt="" class="card__image" />
                <ImageFive alt="" class="card__image" />
                <ImageSix alt="" class="card__image" />
                <ImageSeven alt="" class="card__image" />
                <ImageEight alt="" class="card__image" />
              </div>
              <div class="card__content">
                <h1>Amplify Your Sound</h1>
                <h2>
                  We delivery your music worldwide to significant marketplace.
                </h2>
                <p>
                  <i class="bx bx-chevron-right" style="color:#fca311"></i>Learn
                  More Featured{" "}
                </p>
              </div>
            </div>

            <div class="main_content pt-160 mobile-margin">
              <h2 id="text">
                Amplify your sound
                <br />
                Get featured
              </h2>
              <h3 class="small-text">The eastiest way to music distribution</h3>
            </div>

            <div class="div-block-25 pt-pb-160">
              <div class="div-block-23 card__content">
                <ImageNine class="image-34" width="84" loading="lazy" alt="" />
                <h1>
                  License
                  <br />
                </h1>
              </div>
              <div class="div-block-22 card__content">
                <ImageTen class="image-34" width="84" loading="lazy" alt="" />
                <h1>
                  Distribute
                  <br />
                </h1>
              </div>
              <div class="div-block-24 card__content">
                <ImageEleven
                  class="image-34"
                  width="84"
                  loading="lazy"
                  alt=""
                />
                <h1>
                  Monetize
                  <br />
                </h1>
              </div>
            </div>
            <h2
              class="o-typo--fs-large animated"
              data-in-viewport=""
              data-animation-type="headline"
              style="opacity: 1; transform: translate(0%, -100%) matrix(1, 0, 0, 1, 0, 90); will-change: auto;"
            >
              We’re on a mission to transform artist
              <br />
              by giving assistance to control your own works.
            </h2>

            <div class="main_content pt-160 mobile-margin">
              <h2 id="text">
                Grow your fans
                <br />
                Grow your royalties
              </h2>
              <h3 class="small-text title-right">
                We work with digital stores to sell your songs worldwide.
              </h3>
            </div>

            <div class="Artists_wrapper pt-160">
              <div class="Artists_artistsCluster">
                <div class="Artists_artists__50zY8">
                  <div class="lazyload">
                    <div
                      class="Artist_artist__2zGCA Artist_artist2__ZdGL1"
                      data-style="background: url(assets\images\banners\artist_hero_2.png) center top / cover no-repeat;"
                      style='background: url("assets\images\banners\artist_hero_2.png") center top / cover no-repeat;'
                    >
                      <ImageTwelve
                        alt="pic"
                        id="main_img"
                        style={{ transform: "rotate(0deg)" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="Artists_tagsCluster__3cJJQ Artists_highlight0__3_7uU">
                <ul class="Artists_mobileTags__21xmh">
                  <li
                    class="Artists_tag__gNcQp"
                    style="
                                -webkit-text-fill-color: transparent;
                                -webkit-text-stroke-width: 1px;
                            "
                  >
                    Reggae Soul Pop Funk Dance
                  </li>
                  <li class="Artists_tag__gNcQp Artists_highlight__168Aj">
                    LATIN Rock R&B{" "}
                  </li>
                  <li
                    class="Artists_tag__gNcQp"
                    style="
                                -webkit-text-fill-color: transparent;
                                -webkit-text-stroke-width: 1px;
                            "
                  >
                    {" "}
                    Dancehall Jazz Blues{" "}
                  </li>
                  <li class="Artists_tag__gNcQp">
                    Blues Oldies Rap/hip-hop Dance
                  </li>
                </ul>
                <ul class="Artists_tagCol__22SdQ Artists_desktopTags__XrNgL">
                  <li
                    class="Artists_tag__gNcQp"
                    style="
                                -webkit-text-fill-color: transparent;
                                -webkit-text-stroke-width: 1px;
                            "
                  >
                    Reggae Soul Pop Funk Dance
                  </li>
                  <li class="Artists_tag__gNcQp Artists_highlight__168Aj">
                    LATIN Rock R&B{" "}
                  </li>
                  <li
                    class="Artists_tag__gNcQp"
                    style="
                                -webkit-text-fill-color: transparent;
                                -webkit-text-stroke-width: 1px;
                            "
                  >
                    {" "}
                    Dancehall Jazz Blues{" "}
                  </li>
                  <li class="Artists_tag__gNcQp">
                    Blues Oldies Rap/hip-hop Dance
                  </li>
                </ul>
              </div>
            </div>

            <div class="sk-faq--light pt-160">
              <h3 class="sk-faq__header">Questions</h3>
              <div class="wrapper">
                {/* <!-- Accordion Heading One --> */}
                <div class="parent-tab">
                  <input type="radio" name="tab" id="tab-1" checked />
                  <label for="tab-1">
                    <span>When do I need a license?</span>
                    <div class="icon">
                      <i class="fas fa-plus"></i>
                    </div>
                  </label>
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      thelit. Quam, repellendus facere, id porro magnam
                      blanditiiss quoteos dolores ratione quidem ipsam esse quos
                      pariatur, repellat obcaecati!
                    </p>
                  </div>
                </div>

                {/* <!-- Accordion Heading Two --> */}
                <div class="parent-tab">
                  <input type="radio" name="tab" id="tab-2" />
                  <label for="tab-2">
                    <span>What does the license cover?</span>
                    <div class="icon">
                      <i class="fas fa-plus"></i>
                    </div>
                  </label>
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      thelit. Quam, repellendus facere, id porro magnam
                      blanditiiss quoteos dolores ratione quidem ipsam esse quos
                      pariatur, repellat obcaecati!
                    </p>
                  </div>
                </div>

                {/* <!-- Accordion Heading Three --> */}
                <div class="parent-tab tab-3">
                  <input type="radio" name="tab" id="tab-3" />
                  <label for="tab-3" class="tab-3">
                    <span>Can I monetize my song? </span>
                    <div class="icon">
                      <i class="fas fa-plus"></i>
                    </div>
                  </label>
                  <div class="content">
                    {/* <!-- Sub Heading One --> */}
                    <div class="child-tab">
                      <input type="checkbox" name="sub-tab" id="tab-4" />
                      <label for="tab-4">
                        <span>Sub Heading One</span>
                        <div class="icon">
                          <i class="fas fa-plus"></i>
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
                          <i class="fas fa-plus"></i>
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
                      <i class="fas fa-plus"></i>
                    </div>
                  </label>
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      thelit. Quam, repellendus facere, id porro magnam
                      blanditiiss quoteos dolores ratione quidem ipsam esse quos
                      pariatur, repellat obcaecati!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* !-- /.container --> */}
      </section>
    </React.Fragment>
  );
};

{
  /* //  hero section  */
}

Home.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
