import { Hono } from "hono";
import homeRouter from "./routers";

export const rootRouter = new Hono();
rootRouter.basePath("/");

rootRouter.route("/", homeRouter);
