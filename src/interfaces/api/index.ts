export interface PagingDataResponse<T> {
  pageInfo: PageInfo;
  data: T[];
}

interface PageInfo {
  page: number;
  size: number;
  empty: boolean;
  last: boolean;
}
