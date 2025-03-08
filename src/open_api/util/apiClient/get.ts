import { AnyZodObject, ZodEffects, ZodSchema } from "zod";
import { RouteConfig } from "@hono/zod-openapi";
import { ZodObjectWithEffect } from "../../@types/config";
import {
  HttpErrorMessageInterface,
  HttpErrorMessageType,
} from "../../@types/responceHttpStatus";

type getRouteProps = {
  path: any;
  paramsSchema?: ZodSchema<any>;
  responsesSchema: ZodSchema<any>;
  querySchema?: ZodSchema<any>;
  tags: string;
  description?: string;
  summary?: string;
  ErrorResponses: HttpErrorMessageType;
};

export const getRoute = (
  props: getRouteProps
): Omit<RouteConfig, "path"> & { path: string } => {
  return {
    method: "get",
    path: props.path,
    summary: props.summary,
    tags: [props.tags],
    description: props.description,
    request: {
      params: props.paramsSchema as AnyZodObject | ZodObjectWithEffect,
      query: props.querySchema as AnyZodObject | ZodObjectWithEffect,
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
            schema: props.ErrorResponses.NotFound,
          },
        },
        description: "Resource not found",
      },
      500: {
        content: {
          "application/json": {
            schema: props.ErrorResponses.InternalServerError,
          },
        },
        description: "Internal server error",
      },
    },
  };
};
