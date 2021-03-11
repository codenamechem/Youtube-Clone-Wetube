import express from "express";
import {
  deleteVideo,
  editVideo,
  getUpload,
  postUpload,
  video,
  videoDetail,
} from "../controllers/videoControllers";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.video, video);


videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);


videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo, editVideo);

videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
