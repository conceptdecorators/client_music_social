import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { uploadMusic } from "../../actions/profile";
// cloudinary form
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UploadMusic = () => {
  const [date, setSelectedDate] = useState(null);
  const [values, setValues] = useState({
    name: "",
    artist: "",
    label: "",
    email: "",
    message: "",
    songTitle: "",
    phone: "",
    genre: "",
    date: "",
    uploadedFiles: [],
    buttonText: "Submit",
    uploadPhotosButtonText: "Upload audio files",
  });

  // destructure state variables
  const {
    name,
    artist,
    songTitle,
    label,
    email,
    message,
    phone,
    genre,
    uploadedFiles,
    buttonText,
    uploadPhotosButtonText,
  } = values;
  // destructure env variables
  const {
    REACT_APP_API,
    REACT_APP_CLOUDINARY_CLOUD_NAME,
    REACT_APP_CLOUDINARY_UPLOAD_SECRET,
  } = process.env;
  console.log(date);
  // event handler
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "...sending" });
    // send to backend for email
    console.table({
      name,
      email,
      phone,
      message,
      uploadedFiles,
      genre,
      date,
      label,
    });
    axios({
      method: "POST",
      url: `${REACT_APP_API}/feedback`,
      data: {
        name,
        artist,
        songTitle,
        label,
        email,
        date,
        genre,
        phone,
        message,
        uploadedFiles,
      },
    })
      .then((response) => {
        // console.log('feedback submit response', response);
        if (response.data.success) toast.success("Thanks for your feedback");
        setValues({
          ...values,
          name: "",
          artist: "",
          songTitle: "",
          label: "",
          phone: "",
          email: "",
          genre: "",
          date: "",
          message: "",
          uploadedFiles: [],
          buttonText: "Submitted",
          uploadPhotosButtonText: "Uploaded",
        });
      })
      .catch((error) => {
        // console.log('feedback submit error', error.response);
        if (error.response.data.error) toast.error("Failed! Try again!");
      });
  };
  // function onChangeInput(value) {
  //   console.log(value);
  // }
  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: REACT_APP_CLOUDINARY_CLOUD_NAME,
        upload_preset: REACT_APP_CLOUDINARY_UPLOAD_SECRET,
        tags: ["ebooks"],
      },
      function (error, result) {
        // console.log(result);

        setValues({
          ...values,
          uploadedFiles: result,
          uploadPhotosButtonText: `${
            result ? result.length : 0
          } Photos uploaded`,
          // Added to include Audio Tracks
          height: 200,
          width: 500,
          flags: "waveform",
          resource_type: "video",
        });
      }
    );
  };
  const feedbackForm = () => (
    <Fragment>
      <h1 className="large text-primary">Upload Music</h1>
      <p className="lead">
        <i className="fas fa-headphones"></i> Add your Music Release details
      </p>
      <small>* = required field</small>
      <div className="form-group">
        <button
          onClick={() => uploadWidget()}
          className="btn btn-outline-secondary btn-block p-5"
        >
          {uploadPhotosButtonText}
        </button>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Description</label>
          <textarea
            onChange={handleChange("message")}
            type="text"
            className="form-control"
            cols="30"
            rows="5"
            placeholder="* Description Music Label Services (ex. Publishing, Distributionor Licensing)"
            value={message}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Your Name</label>
          <input
            className="form-control"
            placeholder="* Full Name"
            type="text"
            onChange={handleChange("name")}
            value={name}
            required
          />
        </div>

        <div className="form-group">
          <label>Your Email</label>
          <input
            className="form-control"
            placeholder="* Email"
            type="email"
            onChange={handleChange("email")}
            value={email}
            required
          />
        </div>

        <div className="form-group">
          <label>Your Phone</label>
          <input
            className="form-control"
            placeholder="* Your Phone Number"
            type="number"
            onChange={handleChange("phone")}
            value={phone}
            required
          />
        </div>

        <div className="form-group">
          <label>Artist Name</label>
          <input
            className="form-control"
            placeholder="* Artist Name"
            type="text"
            onChange={handleChange("artist")}
            value={artist}
            required
          />
        </div>
        <div className="form-group">
          <label>Song Title</label>
          <input
            className="form-control"
            placeholder="* Song Title"
            type="text"
            onChange={handleChange("songTitle")}
            value={songTitle}
            required
          />
        </div>
        <div className="form-group">
          <label>Record Label Name</label>
          <input
            className="form-control"
            placeholder="Record Label Name"
            type="text"
            onChange={handleChange("label")}
            value={label}
          />
        </div>

        <div className="form-group">
          <label>Music Genre:</label>
          <select
            className="form-control"
            value={genre}
            type="select"
            onChange={handleChange("genre")}
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
            Give us an idea of your music category
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
          <label>Song Release Date</label>
          <br />
          {/* <Moment
            format="YYYY/MM/DD"
            onChange={handleChange("date")}
            value={date}
          >
            {date}
          </Moment> */}
          <DatePicker
            selected={date}
            onChange={(date) => setSelectedDate(date)}
          />
        </div>
        <br />

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
  return (
    <>
      <ToastContainer />
      {/* <div className="container text-center">
        <h1 className="p-5">Feedback Online</h1>
      </div> */}
      <div className="container col-md-8 offset-md-2">{feedbackForm()}</div>
      <br />
      <br />
      <br />
    </>
  );
};

export default UploadMusic;
