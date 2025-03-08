import { ZodType } from "zod";

//zod スキーマのみ対応
interface ZodMediaTypeObject {
  schema: ZodType<unknown>;
}
type ZodMediaType =
  | "application/json"
  | "text/html"
  | "text/plain"
  | "application/xml"
  | (string & {});
type ZodContentObject = Partial<Record<ZodMediaType, ZodMediaTypeObject>>;
type ZodRequestBody = {
  description?: string;
  content: ZodContentObject;
  required?: boolean;
};

export { ZodMediaTypeObject, ZodMediaType, ZodContentObject, ZodRequestBody };
