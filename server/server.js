const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Contact = mongoose.model("Contact", ContactSchema);

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

app.post("/api/contact", async (req, res) => {

  try {

    const { name, email, message } = req.body;

    const newMessage = new Contact({
      name,
      email,
      message
    });

    await newMessage.save();

    res.json({
      success: true,
      message: "Message Saved Successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});