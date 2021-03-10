import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoControllers";
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
} from "../controllers/userControllers";

const golbalRouter = express.Router();

golbalRouter.get(routes.home, home);

golbalRouter.get(routes.join, getJoin);
golbalRouter.post(routes.join, postJoin);

golbalRouter.get(routes.login, getLogin);
golbalRouter.post(routes.login, postLogin);

golbalRouter.get(routes.logout, logout);

golbalRouter.get(routes.search, search);

export default golbalRouter;
