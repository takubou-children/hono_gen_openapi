import { AnyZodObject, ZodSchema } from "zod";
import { RouteConfig } from "@hono/zod-openapi";
import {
  httpErrorMessageSchema,
  HttpErrorMessageType,
} from "../../@types/responceHttpStatus";
import { ZodObjectWithEffect } from "../../@types/config";

type putRouteProps = {
  path: string;
  paramsSchema?: ZodSchema<any>;
  requestBodySchema: ZodSchema<any>;
  responsesSchema: ZodSchema<any>;
  tags: string;
  description?: string;
  summary?: string;
  httpErrorMessageSchema: HttpErrorMessageType;
};

export const putRoute = (
  props: putRouteProps
): Omit<RouteConfig, "path"> & { path: string } => {
  return {
    method: "put",
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
