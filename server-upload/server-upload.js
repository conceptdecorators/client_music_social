require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

// console.log(process.env);

// import routes
const feedbackRoutes = require("./routes/feedback");

// app
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
// app.use(bodyParser.json());
// app.use(express.json());
app.use(cors());

// Prevent Cors Errors
// app.use((req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.headers("Access-Contol-Allow-Headers", "*");
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT,POST, PATCH, DELETE, GET");
//   }
// });

// routes
app.use("/api", feedbackRoutes);

// port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
