const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.emailFeedback = (req, res) => {
  // console.log(req.body);
  const {
    name,
    email,
    message,
    phone,
    uploadedFiles,
    artist,
    songTitle,
    genre,
    date,
    label,
  } = req.body;
  const emailData = {
    to: process.env.EMAIL_TO,
    from: email,
    subject: "Feedback form",
    html: `
            <h1>Customer Feedback Form</h1>
            <hr />
            <h2>Sender name: ${name}</h2>
            <h2>Sender email: ${email}</h2>
            <h2>Sender message: ${message}</h2>
            <h2>Sender Artist Name: ${artist}</h2>
            <h2>Sender Song Name: ${songTitle}</h2>
            <h2>Sender Record Label Name: ${label}</h2>
            <h2>Sender Song Release Date: ${date}</h2>
            <h2>Sender Genre: ${genre}</h2>
            
            <br />
            ${uploadedFiles.map((f) => {
              return `<img src="${f.secure_url}" alt="${f.original_filename}" style="width:50%;overflow:hidden;padding:50px;" />`;
            })}
            <hr />
            <p>https://zilahmusicpublishing.com</p>
        `,
  };

  sgMail
    .send(emailData)
    .then((sent) => {
      console.log(sent);
      return res.json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.json({
        success: false,
      });
    });
};
