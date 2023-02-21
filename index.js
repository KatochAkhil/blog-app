const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const UserRoute = require("./routes/auth");
const ProfileRoute = require("./routes/profile");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", UserRoute);
app.use("/api/profile", ProfileRoute);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is working on Port no ${process.env.PORT}`);
});
