const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const UserRoute = require("./routes/auth");
const ProfileRoute = require("./routes/profile");
const BlogsRoute = require("./routes/blogs");
const ContactFormRoute = require("./routes/contact");

dotenv.config();
const app = express();
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("./uploads"));
app.use(express.json());
app.use(cors());
app.use("/api/auth", UserRoute);
app.use("/api/profile", ProfileRoute);
app.use("/api/blogs", BlogsRoute);
app.use("/api/contactForm", ContactFormRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is working on Port no ${process.env.PORT}`);
});
