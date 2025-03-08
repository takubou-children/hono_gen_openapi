// src/open_api/type/httpErrorFlag.ts
import { z } from "@hono/zod-openapi";

export interface HttpErrorMessageInterface {
  Success: string;
  Forbidden: string;
  NotFound: string;
  BadRequest: string;
  Unauthorized: string;
  InternalServerError: string;
}

export const httpErrorMessage: HttpErrorMessageInterface = {
  Success: "Success",
  Forbidden: "権限がありません",
  NotFound: "指定されたデータが見つかりませんでした",
  BadRequest: "不正なリクエストです",
  Unauthorized: "セッションが切れました。再度ログインしてください",
  InternalServerError: "サーバーエラーが発生しました",
} as const;

// 共通の関数を定義
const createErrorMessageSchema = (message: string) => z.string({ message });

export const httpErrorMessageSchema = z.object({
  Success: z.object({
    message: createErrorMessageSchema(httpErrorMessage.Success),
  }),
  Forbidden: z.object({
    message: createErrorMessageSchema(httpErrorMessage.Forbidden),
  }),
  NotFound: z.object({
    message: createErrorMessageSchema(httpErrorMessage.NotFound),
  }),
  BadRequest: z.object({
    message: createErrorMessageSchema(httpErrorMessage.BadRequest),
  }),
  Unauthorized: z.object({
    message: createErrorMessageSchema(httpErrorMessage.Unauthorized),
  }),
  InternalServerError: z.object({
    message: createErrorMessageSchema(httpErrorMessage.InternalServerError),
  }),
});

export type HttpErrorMessageType = z.infer<typeof httpErrorMessageSchema>;
