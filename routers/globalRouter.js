import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoControllers";
import { join, login, logout } from "../controllers/userControllers";

const golbalRouter = express.Router();

golbalRouter.get(routes.home, home);
golbalRouter.get(routes.join, join);
golbalRouter.get(routes.login, login);
golbalRouter.get(routes.logout, logout);
golbalRouter.get(routes.search, search);

export default golbalRouter;
