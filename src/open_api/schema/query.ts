import { z } from "@hono/zod-openapi";

const getListQuery = z
  .object({
    limit: z.number().int().optional(),
    offset: z.number().int().optional(),
  })
  .openapi({
    example: {
      limit: 10,
      offset: 0,
    },
  })
  .describe("GetListQuery");

export { getListQuery };
