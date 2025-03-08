import { AnyZodObject, ZodEffects } from "zod";

export type ZodObjectWithEffect =
  | AnyZodObject
  | ZodEffects<ZodObjectWithEffect, unknown, unknown>;
