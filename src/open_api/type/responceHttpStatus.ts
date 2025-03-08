// src/open_api/type/httpErrorFlag.ts
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

export type HttpErrorMessages = keyof HttpErrorMessageInterface;

const statusNumbers = [200, 403, 404, 400, 401, 500] as const;

export type HttpStatusNumber = (typeof statusNumbers)[number];
export const HTTPErrors: Record<HttpStatusNumber, string> = {
  200: httpErrorMessage.Success,
  403: httpErrorMessage.Forbidden ?? "",
  404: httpErrorMessage.NotFound,
  400: httpErrorMessage.BadRequest ?? "",
  401: httpErrorMessage.Unauthorized ?? "",
  500: httpErrorMessage.InternalServerError,
} as const;
