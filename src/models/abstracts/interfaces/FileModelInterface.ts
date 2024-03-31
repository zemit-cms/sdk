export interface FileModelInterface {
  id: number;
  userId: number;
  category: string;
  key: string;
  path: string;
  type: string;
  typeReal: string;
  extension: string;
  name: string;
  nameTemp: string;
  size: string;
  error: string;
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