export interface AuditModelInterface {
  id: number;
  parentId: number;
  model: string;
  table: string;
  primary: number;
  event: string;
  columns: string;
  before: string;
  after: string;
  deleted: number;
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