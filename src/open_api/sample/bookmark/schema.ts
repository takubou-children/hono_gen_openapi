import { z } from "@hono/zod-openapi";

// Bookmark schema
const bookmarkSchema = z
  .object({
    bookmark_id: z.string(),
    user_id: z.string(),
    post_id: z.string(),
    created_at: z.date(),
  })
  .describe("Bookmark");

const bookmarkListResponse = z.object({
  bookmarks: z.array(bookmarkSchema),
});

const bookmarkIDResponse = bookmarkSchema.pick({ bookmark_id: true });

const bookmarkParams = bookmarkSchema
  .pick({ bookmark_id: true })
  .openapi({
    required: ["bookmark_id"],
    example: {
      bookmark_id: "550e8400-e29b-41d4-a716-446655440002",
    },
  })
  .describe("BookmarkParams");

const bookmarkRequestBody = bookmarkSchema
  .omit({ bookmark_id: true, created_at: true })
  .openapi({
    example: {
      user_id: "550e8400-e29b-41d4-a716-446655440000",
      post_id: "550e8400-e29b-41d4-a716-446655440001",
    },
    required: ["user_id", "post_id"],
  })
  .describe("BookmarkRequestBody");

export {
  bookmarkIDResponse,
  bookmarkSchema,
  bookmarkListResponse,
  bookmarkParams,
  bookmarkRequestBody,
};
