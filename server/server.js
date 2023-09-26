import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import router from "./routes/video.js";
import { errorHandler } from "./middlewares/error.js";
import videos from "./models/Videos.js";

dotenv.config();

// Express App
const app = express();
const port = process.env.PORT || 5001;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/videos", router);

app.get('/api/getImages',(req,res) => {
  videos.find()
  .then(videos => res.json(videos))
  .catch(err => res.json(err))
  console.log(videos.find())

});

app.use(errorHandler);

// Listen to the requests
app.listen(port, () => {
  // connect to DB
  connectDB();
  console.log("Server started listening on port", port);
});