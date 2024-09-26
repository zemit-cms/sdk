export interface DataModelInterface {
  id: number;
  workspaceId: number;
  tableId: number;
  columnId: number;
  recordId: number;
  uuid: string;
  value: string;
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
}