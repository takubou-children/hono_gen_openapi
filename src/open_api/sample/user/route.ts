import {
  userIDResponse,
  userSchema,
  userRequestBody,
  userParams,
  userListResponse,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";
import { getListQuery } from "../../schema/query";

const UserCreateRoute = postRoute({
  path: "users",
  requestBodySchema: userRequestBody,
  responsesSchema: userIDResponse,
  tags: "User",
  summary: "user作成",
  description: "user作成",
});

const UserAllGetRoute = getRoute({
  path: "users",
  querySchema: getListQuery,
  responsesSchema: userListResponse,
  tags: "User",
  summary: "user全取得",
  description: "user全取得",
});

const UserGetByIDRoute = getRoute({
  path: "users/{user_id}",
  paramsSchema: userParams,
  responsesSchema: userSchema,
  tags: "User",
  summary: "user取得",
  description: "user取得",
});

const UserUpdateRoute = putRoute({
  path: "users/{user_id}",
  paramsSchema: userParams,
  requestBodySchema: userRequestBody,
  responsesSchema: userIDResponse,
  tags: "User",
  summary: "user更新",
  description: "user更新",
});

const UserDeleteRoute = deleteRoute({
  path: "users/{user_id}",
  paramsSchema: userParams,
  responsesSchema: userIDResponse,
  tags: "User",
  summary: "user削除",
  description: "user削除",
});

export const UserRoutes = [
  UserCreateRoute,
  UserAllGetRoute,
  UserGetByIDRoute,
  UserUpdateRoute,
  UserDeleteRoute,
];
