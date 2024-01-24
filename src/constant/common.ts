export type PageResponse<T> = {
  data: T[];
  total: number;
  success: boolean;
};
