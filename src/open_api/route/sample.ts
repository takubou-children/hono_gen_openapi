import { OpenAPIHono } from "@hono/zod-openapi";
import {
  UserRoutes,
  PostRoutes,
  BookmarkRoutes,
  ProfileRoutes,
} from "../sample";
export const sampleApi = new OpenAPIHono();

const routes = [
  ...UserRoutes,
  ...PostRoutes,
  ...BookmarkRoutes,
  ...ProfileRoutes,
];

routes.forEach((route) => {
  sampleApi.openapi(route, (c) => {
    return c.json({});
  });
});
