import {
  postIDResponse,
  postParams,
  postRequestBody,
  postSchema,
  postListResponse,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";
import { getListQuery } from "../../schema/query";

const PostCreateRoute = postRoute({
  path: "posts",
  requestBodySchema: postRequestBody,
  responsesSchema: postIDResponse,
  tags: "Posts",
  summary: "Post作成",
  description: "user作成",
});

const PostGetAllRoute = getRoute({
  path: "posts",
  querySchema: getListQuery,
  responsesSchema: postListResponse,
  tags: "Posts",
  summary: "Post一覧取得",
  description: "user一覧取得",
});

const PostGetByIDRoute = getRoute({
  path: "posts/{post_id}",
  paramsSchema: postParams,
  responsesSchema: postSchema,
  tags: "Posts",
  summary: "Post取得",
  description: "user取得",
});

const PostUpdateRoute = putRoute({
  path: "posts/{post_id}",
  paramsSchema: postParams,
  requestBodySchema: postRequestBody,
  responsesSchema: postIDResponse,
  tags: "Posts",
  summary: "Post更新",
  description: "user更新",
});

const PostDeleteRoute = deleteRoute({
  path: "posts/{post_id}",
  paramsSchema: postParams,
  responsesSchema: postIDResponse,
  tags: "Posts",
  summary: "Post削除",
  description: "user削除",
});

export const PostRoutes = [
  PostCreateRoute,
  PostGetAllRoute,
  PostGetByIDRoute,
  PostUpdateRoute,
  PostDeleteRoute,
];
