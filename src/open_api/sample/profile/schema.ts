import { z } from "@hono/zod-openapi";

const genderEnum = z.enum(["male", "female", "other"]);

// User schema
const profileSchema = z
  .object({
    profile_id: z.string(),
    name: z.string(),
    profile_picture: z.string().optional(),
    bio: z.string().optional(),
    gender: genderEnum.optional(),
    created_at: z.string(),
    updated_at: z.string(),
  })
  .openapi({
    required: ["profile_id", "name", "created_at", "updated_at"],
  })
  .describe("User");

const profileIDResponse = profileSchema.pick({ profile_id: true }).openapi({
  example: {
    profile_id: "XXXXXXXX",
  },
});

const profileParams = profileSchema.pick({ profile_id: true }).openapi({
  example: {
    profile_id: "XXXXXXXX",
  },
});
const profileListResponse = z.object({
  profile: z.array(profileSchema),
});

const profileRequestBody = profileSchema
  .pick({
    name: true,
    profile_picture: true,
    bio: true,
    gender: true,
  })
  .openapi({
    example: {
      name: "John Doe",
      profile_picture: "https://example.com/profile_picture.jpg",
      bio: "Hello, I'm John Doe.",
      gender: "male",
    },
    required: ["name", "profile_picture", "bio", "gender"],
  });

export {
  profileSchema,
  profileListResponse,
  profileIDResponse,
  profileRequestBody,
  profileParams,
};
