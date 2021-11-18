import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Layout from "./Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Upload = () => {
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

  // console.log(date);

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
      artist,
      songTitle,
      label,
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
    <React.Fragment>
      <div className="form-group">
        <button
          onClick={() => uploadWidget()}
          className="btn btn-outline-secondary btn-block p-5"
        >
          {uploadPhotosButtonText}
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-warning">Description</label>
          <textarea
            onChange={handleChange("message")}
            type="text"
            className="form-control"
            value={message}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label className="text-warning">Your Name</label>
          <input
            className="form-control"
            type="text"
            onChange={handleChange("name")}
            value={name}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-warning">Your Email</label>
          <input
            className="form-control"
            type="email"
            onChange={handleChange("email")}
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-warning">Your Phone</label>
          <input
            className="form-control"
            type="number"
            onChange={handleChange("phone")}
            value={phone}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-warning">Artist Name</label>
          <input
            className="form-control"
            type="text"
            onChange={handleChange("artist")}
            value={artist}
            required
          />
        </div>

        <div className="form-group">
          <label className="text-warning">Song Title</label>
          <input
            className="form-control"
            type="text"
            onChange={handleChange("songTitle")}
            value={songTitle}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-warning">Record Label Name</label>
          <input
            className="form-control"
            type="text"
            onChange={handleChange("label")}
            value={label}
          />
        </div>
        {/* <div className="form-group">
          <label className="text-warning">Music Genre:</label>
          <select
            className="form-control"
            value={genre}
            type="select"
            onChange={handleChange("genre")}
            onChange={(event) => {
              value = { foodState };
              const selectedFood = e.target.value;
              setFoodState(selectedFood);
            }}
          >
            <option value="steak">Steak</option>
            <option value="sandwich">Sandwich</option>
            <option value="dumpling">Dumpling</option>
          </select>
        </div> */}
        <div className="form-group">
          <label className="text-warning">Music Genre:</label>
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
            <option value="Dancehall">Dancehall</option>
            <option value="Disney">Disney</option>
            <option value="Disco">Disco</option>
            <option value="Easy Listening">Easy Listening</option>
            <option value="Electronic">Electronic</option>
            <option value="Enka">Enka</option>
            <option value="French Pop">French Pop</option>
            <option value="German Folk">German Folk</option>
            <option value="German Pop">German Pop</option>
            <option value="Grime">Grime</option>
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
            <option value="Latin trap">Latin trap</option>
            <option value="Metal">Metal</option>
            <option value="New Age">New Age</option>
            <option value="Opera">Opera</option>
            <option value="Pop">Pop</option>
            <option value="R&B/Soul">R&B/Soul</option>
            <option value="Reggae">Reggae</option>
            <option value="Reggaeton">Reggaeton</option>
            <option value="Rock">Rock</option>
            <option value="Singer/Songwriter">Singer/Songwriter</option>
            <option value="Soundtrack">Soundtrack</option>
            <option value="Spoken Word">Spoken Word</option>
            <option value="Tex-Mex / Tejano">Tex-Mex / Tejano</option>
            <option value="UK garage">UK garage</option>
            <option value="Vocal">Vocal</option>
            <option value="	World"> World</option>
          </select>
        </div>
        <br />
        <div className="form-group">
          <label className="text-warning">Song Release Date</label>
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
        <button className="btn btn-outline-primary btn-block">
          {buttonText}
        </button>
      </form>
    </React.Fragment>
  );

  return (
    <Layout>
      <ToastContainer />
      <div className="container-form text-center" id="upload-music">
        <h1 className="p-5">Music Submission</h1>
      </div>
      <div className="">{feedbackForm()}</div>
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default Upload;
