import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(
  "mongodb+srv://wetube:pR5w2Bv_X@wetube.orwqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
