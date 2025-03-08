// src/open_api/type/httpErrorFlag.ts
import { z } from "zod"; // Zodをインポート

export interface HttpErrorMessageInterface {
  Success: string;
  Forbidden?: string;
  NotFound: string;
  BadRequest?: string;
  Unauthorized?: string;
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
export type ttpErrorMessageKey = keyof HttpErrorMessageInterface;
export type HttpErrorMessages = keyof HttpErrorMessageInterface;
const statusNumbers = [200, 403, 404, 400, 401, 500] as const;
export type HttpStatusNumber = (typeof statusNumbers)[number];

export const httpErrorMessageSchema = z.object({
  Success: z.object({
    message: z.string().optional(),
  }),
  Forbidden: z.object({
    message: z.string().optional(),
  }),
  NotFound: z.object({
    message: z.string().optional(),
  }),
  BadRequest: z.object({
    message: z.string().optional(),
  }),
  Unauthorized: z.object({
    message: z.string().optional(),
  }),
  InternalServerError: z.object({
    message: z.string().optional(),
  }),
});

export type HttpErrorMessageType = z.infer<typeof httpErrorMessageSchema>;
