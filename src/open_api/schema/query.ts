import { z } from "@hono/zod-openapi";

const getListQuery = z.object({
  page_id: z.string().optional(),
  page_size: z.string().optional(),
});

export { getListQuery };
