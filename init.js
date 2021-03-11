import app from "./app";
import dotenv from "dotenv";
import "./db";
dotenv.config();
import "./models/Video"
import "./models/Comment"

const PORT = process.env.PORT || 4000;

const handleListing = () =>
  console.log(`✅Listing on:https//localhost:${PORT}`);

app.listen(PORT, handleListing);
