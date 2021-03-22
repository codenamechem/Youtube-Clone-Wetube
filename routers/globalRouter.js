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
import { onlyPublic } from "../middlewares";

const golbalRouter = express.Router();

golbalRouter.get(routes.join, onlyPublic, getJoin);
golbalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

golbalRouter.get(routes.login, onlyPublic, getLogin);
golbalRouter.post(routes.login, onlyPublic, postLogin);

golbalRouter.get(routes.home, home);
golbalRouter.get(routes.search, search);

golbalRouter.get(routes.logout, onlyPublic, logout);

export default golbalRouter;
