import { AnyZodObject, ZodSchema } from "zod";
import { ZodObjectWithEffect } from "../type/params";
import { RouteConfig } from "@hono/zod-openapi";

type postRouteProps = {
  path: string;
  paramsSchema?: ZodSchema<any>;
  requestBodySchema: ZodSchema<any>;
  responsesSchema: ZodSchema<any>;
  tags: string;
  description?: string;
  summary?: string;
};

export const postRoute = (
  props: postRouteProps
): Omit<RouteConfig, "path"> & { path: string } => {
  return {
    method: "post",
    path: props.path,
    tags: [props.tags],
    summary: props.summary,
    description: props.description,
    request: {
      params: props.paramsSchema as AnyZodObject | ZodObjectWithEffect,
      body: {
        content: {
          "application/json": {
            schema: props.requestBodySchema,
          },
        },
      },
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: props.responsesSchema,
          },
        },
        description: "Successful response",
      },
      404: {
        description: "Resource not found",
      },
      500: {
        description: "Internal server error",
      },
    },
  };
};
