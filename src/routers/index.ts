import { Hono } from "hono";

const homeRouter = new Hono();
homeRouter.get("/", (c) => {
	return c.text("Hello, World!");
});

export default homeRouter;
