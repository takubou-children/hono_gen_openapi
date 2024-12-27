import { z } from "@hono/zod-openapi";

// Post schema
const postSchema = z
  .object({
    post_id: z.string(),
    user_id: z.string(),
    description: z.string().optional(),
    photo_urls: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    view_count: z.number().default(0),
    created_at: z.string(),
    updated_at: z.string(),
  })
  .describe("Post");

const postIDResponse = postSchema.pick({ post_id: true });

const postListResponse = z.object({
  posts: z.array(postSchema),
});

const postParams = postSchema
  .pick({ post_id: true })
  .openapi({
    example: {
      post_id: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
    required: ["post_id"],
  })
  .describe("PostParams");

const postRequestBody = postSchema
  .omit({ post_id: true, created_at: true, updated_at: true, view_count: true })
  .openapi({
    example: {
      user_id: "550e8400-e29b-41d4-a716-446655440000",
      description: "This is a post",
      photo_urls: ["https://example.com/photo.jpg"],
      tags: ["tag1", "tag2"],
    },
    required: ["user_id"],
  })
  .describe("PostRequestBody");

export {
  postIDResponse,
  postSchema,
  postListResponse,
  postParams,
  postRequestBody,
};
