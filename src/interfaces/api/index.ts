export interface PagingDataResponse<T> {
  pageInfo: PageInfo;
  data: T[];
}

interface PageInfo {
  page: number;
  size: number;
  total: number;
  empty: boolean;
  last: boolean;
}
