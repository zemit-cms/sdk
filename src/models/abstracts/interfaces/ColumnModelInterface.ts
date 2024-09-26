export interface ColumnModelInterface {
  id: number;
  uuid: string;
  workspaceId: number;
  tableId: number;
  name: string;
  description: string;
  type: string;
  validationRegex: string;
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