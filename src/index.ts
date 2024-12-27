import { Hono } from "hono";

import { prettyJSON } from "hono/pretty-json";
import openapi from "./open_api/route";

const app = new Hono();
app.use(prettyJSON());
app.notFound((c) => c.json({ message: "Not Found", ok: false }, 404));

app.get("/", (c) => {
  return c.json({ message: "Hello, World!" });
});

app.route("/api", openapi);

export default app;
