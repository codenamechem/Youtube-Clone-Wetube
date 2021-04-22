import "@babel/polyfill";
import dotenv from "dotenv";
import "./db";
import app from "./app";

import "./models/Video";
import "./models/Comment";
import "./models/User";

dotenv.config();

const PORT = 4000;

const handleListing = () =>
  console.log(`✅Listing on:https//localhost:${PORT}`);

app.listen(PORT, handleListing);
