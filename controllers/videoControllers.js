import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingby },
  } = req;
  res.render("search", { pageTitle: "Search", searchingby, videos });
};

export const video = (req, res) => res.render("video", { pageTitle: "Video" });

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
  
export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail());
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "VideoDetail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "EditVideo" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "DeleteVideo" });
