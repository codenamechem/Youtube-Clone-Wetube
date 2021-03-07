import express from "express";
import {
  deleteVideo,
  editVideo,
  upload,
  video,
  videoDetail,
} from "../controllers/videoControllers";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.video, video);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
