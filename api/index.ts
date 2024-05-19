import { Hono } from "hono";
import { handle } from "hono/vercel";
import { rootRouter } from "@/main";

export const config = {
	runtime: "edge",
};

const app = new Hono().basePath("/");

app.route("/", rootRouter);

export default handle(app);
