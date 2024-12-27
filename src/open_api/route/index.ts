import { OpenAPIHono } from "@hono/zod-openapi";
import { sampleApi } from "./sample";
import { swaggerUI } from "@hono/swagger-ui";

const openapi = new OpenAPIHono();

//docのbase path
openapi.route("/api/v1", sampleApi);

//swagger ui
openapi.get("/ui", swaggerUI({ url: "/api/doc" }));
openapi.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

export default openapi;
