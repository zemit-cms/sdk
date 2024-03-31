export interface FlagModelInterface {
  id: number;
  siteId: number;
  pageId: number;
  langId: number;
  label: string;
  index: string;
  value: string;
  meta: object;
  deleted: string;
  createdAt: string;
  createdBy: number;
  createdAs: number;
  updatedAt: string;
  updatedBy: number;
  updatedAs: number;
  deletedAt: string;
  deletedAs: number;
  deletedBy: number;
  restoredAt: string;
  restoredBy: number;
  restoredAs: number;
}