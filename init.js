import app from "./app";

const PORT = 4000;

const handleListing = () =>
  console.log(`✅Listing on:https//localhost:${PORT}`);

app.listen(PORT, handleListing);
