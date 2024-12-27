import { z } from "@hono/zod-openapi";

// User Schema
export const UserSchema = z
  .object({
    user_id: z
      .string()
      .uuid()
      .openapi({ example: "550e8400-e29b-41d4-a716-446655440000" }),
    username: z.string().max(50).openapi({ example: "john_doe" }),
    email: z.string().email().max(100).openapi({ example: "john@example.com" }),
    password_hash: z.string().max(255).openapi({ example: "hashed_password" }),
    profile_image: z
      .string()
      .max(255)
      .nullable()
      .openapi({ example: "http://example.com/image.jpg" }),
    bio: z.string().nullable().openapi({ example: "Software Developer" }),
    phone_number: z
      .string()
      .max(15)
      .nullable()
      .openapi({ example: "+1234567890" }),
    birthday: z.string().date().nullable().openapi({ example: "1990-01-01" }),
    gender: z.string().max(10).nullable().openapi({ example: "Male" }),
    location: z.string().max(100).nullable().openapi({ example: "New York" }),
    website: z
      .string()
      .max(255)
      .nullable()
      .openapi({ example: "http://example.com" }),
    created_at: z
      .string()
      .datetime()
      .openapi({ example: "2023-01-01T00:00:00Z" }),
    updated_at: z
      .string()
      .datetime()
      .openapi({ example: "2023-01-01T00:00:00Z" }),
  })
  .openapi("User");

export const UserRequestBody = UserSchema.omit({
  user_id: true,
  created_at: true,
  updated_at: true,
}).openapi({
  required: ["username", "email", "password_hash"],
});
export const UserParams = z.object({
  user_id: z
    .string()
    .uuid()
    .openapi({ example: "550e8400-e29b-41d4-a716-446655440000" }),
});

export const UserGetQuery = z
  .object({
    page_size: z.string().optional().openapi({ example: "10" }),
    page_index: z.string().optional().openapi({ example: "1" }),
  })
  .openapi("UserGetParams");

// User Followers Schema
export const UserFollowerSchema = z
  .object({
    follower_id: z
      .string()
      .uuid()
      .openapi({ example: "550e8400-e29b-41d4-a716-446655440000" }),
    followed_id: z
      .string()
      .uuid()
      .openapi({ example: "550e8400-e29b-41d4-a716-446655440001" }),
    created_at: z
      .string()
      .datetime()
      .openapi({ example: "2023-01-01T00:00:00Z" }),
  })
  .openapi("UserFollower");

export const UserFollowerParams = z.object({
  user_id: z.string(),
  follower_id: z.string(),
});

export const UserFollowerGetQuery = z.object({
  page_size: z.string().optional(),
  page_index: z.string().optional(),
});

export const UserFollowerRequestBody = UserFollowerSchema.omit({
  created_at: true,
}).openapi({
  required: ["follower_id", "followed_id"],
});

// Post Schema
export const PostSchema = z
  .object({
    post_id: z
      .string()
      .uuid()
      .openapi({ example: "550e8400-e29b-41d4-a716-446655440002" }),
    user_id: z
      .string()
      .uuid()
      .openapi({ example: "550e8400-e29b-41d4-a716-446655440000" }),
    content: z.string().openapi({ example: "This is a post content." }),
    image_url: z
      .string()
      .max(255)
      .nullable()
      .openapi({ example: "http://example.com/image.jpg" }),
    location: z.string().max(100).nullable().openapi({ example: "New York" }),
    created_at: z
      .string()
      .datetime()
      .openapi({ example: "2023-01-01T00:00:00Z" }),
    updated_at: z
      .string()
      .datetime()
      .openapi({ example: "2023-01-01T00:00:00Z" }),
  })
  .openapi("Post");

export const PostParams = z.object({
  post_id: z
    .string()
    .uuid()
    .openapi({ example: "550e8400-e29b-41d4-a716-446655440002" }),
});

export const PostGetQuery = z.object({
  page_size: z.string().optional(),
  page_index: z.string().optional(),
});

export const PostRequestBody = PostSchema.omit({
  post_id: true,
  created_at: true,
  updated_at: true,
}).openapi({
  required: ["user_id", "content"],
});
