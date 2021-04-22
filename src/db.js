import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(
  "mongodb://wetube:pR5w2Bv_X.gTVxA@wetube-shard-00-00.orwqd.mongodb.net:27017,wetube-shard-00-01.orwqd.mongodb.net:27017,wetube-shard-00-02.orwqd.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-61gfg5-shard-0&authSource=admin&retryWrites=true&w=majority",
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
