import {
  bookmarkIDResponse,
  bookmarkSchema,
  bookmarkListResponse,
  bookmarkParams,
  bookmarkRequestBody,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";
import { getListQuery } from "../../schema/query";

const BookmarkCreateRoute = postRoute({
  path: "bookmarks",
  requestBodySchema: bookmarkRequestBody,
  responsesSchema: bookmarkIDResponse,
  tags: "Bookmarks",
  description: "bookmark作成",
  summary: "bookmark作成",
});

const BookmarkGetAllRoute = getRoute({
  path: "bookmarks",
  querySchema: getListQuery,
  responsesSchema: bookmarkListResponse,
  tags: "Bookmarks",
  description: "bookmark一覧取得",
  summary: "bookmark一覧取得",
});

const BookmarkGetByIDRoute = getRoute({
  path: "bookmarks/{bookmark_id}",
  paramsSchema: bookmarkParams,
  responsesSchema: bookmarkSchema,
  tags: "Bookmarks",
  description: "bookmark取得",
  summary: "bookmark取得",
});

const BookmarkUpdateRoute = putRoute({
  path: "bookmarks/{bookmark_id}",
  paramsSchema: bookmarkParams,
  requestBodySchema: bookmarkRequestBody,
  responsesSchema: bookmarkIDResponse,
  tags: "Bookmarks",
  description: "bookmark更新",
  summary: "bookmark更新",
});

const BookmarkDeleteRoute = deleteRoute({
  path: "bookmarks/{bookmark_id}",
  paramsSchema: bookmarkParams,
  responsesSchema: bookmarkIDResponse,
  tags: "Bookmarks",
  description: "bookmark削除",
  summary: "bookmark削除",
});

export const BookmarkRoutes = [
  BookmarkCreateRoute,
  BookmarkGetAllRoute,
  BookmarkGetByIDRoute,
  BookmarkUpdateRoute,
  BookmarkDeleteRoute,
];
