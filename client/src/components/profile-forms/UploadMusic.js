import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { uploadMusic } from "../../actions/profile";

const UploadMusic = ({ uploadMusic, history }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    artistName: "",
    songTitle: "",
    recordLabel: "",
    releasedDate: "",
    genre: "",
    // to: "",
    Publishing: false,
    Distribution: false,
    licensing: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    fullName,
    artistName,
    songTitle,
    recordLabel,
    releasedDate,
    genre,
    // to,
    Publishing,
    Distribution,
    licensing,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  
  return (
    <Fragment>
      <h1 className="large text-primary">Upload Music</h1>
      <p className="lead">
        <i className="fas fa-headphones"></i> Add your Music Release details
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          uploadMusic(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Full Name"
            name="fullName"
            value={fullName}
            onChange={(e) => onChange(e)}
            // value={values.fullName}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Artist Name"
            name="artistName"
            value={artistName}
            // value={values.artistName}
            onChange={(e) => onChange(e)}
            // onChange={set("artistName")}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Song Title"
            name="songTitle"
            value={songTitle}
            // onChange={(e) => onChange(e)}
            onChange={onChange}
            // onChange={set("songTitle")}
            // value={values.songTitle}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Record Label Name"
            name="recordLabel"
            onChange={(e) => onChange(e)}
            // onChange={onChange}
            value={recordLabel}
            // onChange={set("recordLabel")}
            // value={values.recordLabel}
          />
        </div>
        <div className="form-group">
          <h4>Single Released Date</h4>

          <input
            type="date"
            name="releasedDate"
            value={releasedDate}
            onChange={(e) => onChange(e)}
            // onChange={onChange}
            // onChange={set("releasedDate")}
            // value={values.releasedDate}
          />
        </div>
        <div className="form-group">
          <h4>Music Label Services</h4>
          <label>
            <p>
              <input
                type="checkbox"
                name="Publishing"
                value={Publishing}
                onChange={onChange}
                onChange={(e) => onChange(e)}
                // onChange={(e) => {
                //   setFormData({ ...formData, Publishing: !Publishing });
                //   toggleDisabled(!toDateDisabled);
                // }}
                // onChange={set("Publishing")}
                // value={values.Publishing}
              />{" "}
              Publishing
            </p>
            <p>
              <input
                type="checkbox"
                name="Distribution"
                checked={Distribution}
                value={Distribution}
                onChange={(e) => onChange(e)}
                // onChange={onChange}
                // value={Distribution}
                // onChange={(e) => {
                //   setFormData({ ...formData, Distribution: !Distribution });
                //   toggleDisabled(!toDateDisabled);
                // }}
                // onChange={set("Distribution")}
                // value={values.Distribution}
              />{" "}
              Distribution
            </p>
            <p>
              <input
                type="checkbox"
                name="Licensing"
                checked={licensing}
                value={licensing}
                onChange={(e) => onChange(e)}
                // onChange={onChange}
                // value={licensing}
                // onChange={(e) => {
                //   setFormData({ ...formData, licensing: !licensing });
                //   toggleDisabled(!toDateDisabled);
                // }}
                // onChange={set("licensing")}
                // value={values.licensing}
              />{" "}
              Licensing
            </p>
          </label>
        </div>

        <div className="form-group">
          <select
            // value={values.color}
            // onChange={set("color")}
            name="genre"
            onChange={onChange}
            value={genre}
          >
            <option value="0">* Select Genre</option>
            <option value="Alternative">Alternative</option>
            <option value="Anime">Anime</option>
            <option value="Blues">Blues</option>
            <option value="Children’s Music">Children’s Music</option>
            <option value="Classical">Classical</option>
            <option value="Comedy">Comedy</option>
            <option value="Country">Country</option>
            <option value="Dance">Dance</option>
            <option value="Disney">Disney</option>

            <option value="Children’s Music">Children’s Music</option>
            <option value="Classical">Classical</option>
            <option value="Comedy">Comedy</option>
            <option value="Country">Country</option>
            <option value="Dance">Dance</option>
            <option value="Easy Listening">Easy Listening</option>
            <option value="Electronic">Electronic</option>
            <option value="Enka">Enka</option>
            <option value="French Pop">French Pop</option>
            <option value="German Folk">German Folk</option>
            <option value="German Pop">German Pop</option>
            <option value="Hip-Hop/Rap">Hip-Hop/Rap</option>
            <option value="Holiday">Holiday</option>
            <option value="Indie Pop">Indie Pop</option>
            <option value="Industrial">Industrial</option>
            <option value="Inspirational – Christian & Gospel">
              Inspirational – Christian & Gospel
            </option>
            <option value="Instrumental">Instrumental</option>
            <option value="J-Pop">J-Pop</option>
            <option value="Jazz">Jazz</option>
            <option value="K-Pop">K-Pop</option>
            <option value="Karaoke">Karaoke</option>
            <option value="Kayokyoku">Kayokyoku</option>
            <option value="Latin">Latin</option>
            <option value="Metal">Metal</option>
            <option value="New Age">New Age</option>
            <option value="Opera">Opera</option>
            <option value="Pop">Pop</option>
            <option value="R&B/Soul">R&B/Soul</option>
            <option value="Reggae">Reggae</option>
            <option value="Rock">Rock</option>
            <option value="Singer/Songwriter">Singer/Songwriter</option>
            <option value="Soundtrack">Soundtrack</option>
            <option value="Spoken Word">Spoken Word</option>
            <option value="Tex-Mex / Tejano">Tex-Mex / Tejano</option>
            <option value="Vocal">Vocal</option>
            <option value="	World"> World</option>
            {/* {COLORS.map((c) => (
              <option key={c}>{c}</option>
            ))} */}
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>

        {/* <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? "disabled" : ""}
          />
        </div> */}
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Music Description"
            value={description}
            onChange={(e) => onChange(e)}
            // onChange={set("description")}
            // value={values.description}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

UploadMusic.propTypes = {
  uploadMusic: PropTypes.func.isRequired,
};

export default connect(null, { uploadMusic })(withRouter(UploadMusic));
