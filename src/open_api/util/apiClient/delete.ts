import { AnyZodObject, ZodSchema } from "zod";
import { RouteConfig } from "@hono/zod-openapi";
import { httpErrorMessageSchema } from "../../@types/responceHttpStatus";
import { ZodObjectWithEffect } from "../../@types/config";

type deleteRouteProps = {
  path: string;
  paramsSchema?: ZodSchema<any>;
  responsesSchema: ZodSchema<any>;
  tags: string;
  summary?: string;
  description?: string;
};

export const deleteRoute = (
  props: deleteRouteProps
): Omit<RouteConfig, "path"> & { path: string } => {
  return {
    method: "delete",
    path: props.path,
    summary: props.summary,
    tags: [props.tags],
    description: props.description,
    request: {
      params: props.paramsSchema as AnyZodObject | ZodObjectWithEffect,
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
        content: {
          "application/json": {
            schema: httpErrorMessageSchema.shape.NotFound,
          },
        },
        description: "Resource not found",
      },
      500: {
        content: {
          "application/json": {
            schema: httpErrorMessageSchema.shape.InternalServerError,
          },
        },
        description: "Internal server error",
      },
    },
  };
};
