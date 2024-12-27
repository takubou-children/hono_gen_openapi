import {
  profileRequestBody,
  profileIDResponse,
  profileListResponse,
  profileParams,
  profileSchema,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";
import { getListQuery } from "../../schema/query";
const ProfileCreateRoute = postRoute({
  path: "profiles",
  requestBodySchema: profileRequestBody,
  responsesSchema: profileIDResponse,
  tags: "Profile",
  summary: "profile作成",
  description: "profile作成",
});

const ProfileAllGetRoute = getRoute({
  path: "profiles",
  querySchema: getListQuery,
  responsesSchema: profileListResponse,
  tags: "Profile",
  summary: "profile全取得",
  description: "profile全取得",
});

const ProfileGetByIDRoute = getRoute({
  path: "profiles/{profile_id}",
  paramsSchema: profileParams,
  responsesSchema: profileSchema,
  tags: "Profile",
  summary: "profile取得",
  description: "profile取得",
});

const ProfileUpdateRoute = putRoute({
  path: "profiles/{profile_id}",
  paramsSchema: profileParams,
  requestBodySchema: profileRequestBody,
  responsesSchema: profileIDResponse,
  tags: "Profile",
  summary: "profile更新",
  description: "profile更新",
});

const ProfileDeleteRoute = deleteRoute({
  path: "profiles/{profile_id}",
  paramsSchema: profileParams,
  responsesSchema: profileIDResponse,
  tags: "Profile",
  summary: "profile削除",
  description: "profile削除",
});

export const ProfileRoutes = [
  ProfileCreateRoute,
  ProfileAllGetRoute,
  ProfileGetByIDRoute,
  ProfileUpdateRoute,
  ProfileDeleteRoute,
];
