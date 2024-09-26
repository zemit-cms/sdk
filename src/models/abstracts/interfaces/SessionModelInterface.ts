export interface SessionModelInterface {
  id: number;
  userId: number;
  asUserId: number;
  key: string;
  token: string;
  jwt: string;
  meta: string;
  date: string;
  deleted: number;
  createdAt: string;
  createdBy: number;
  createdAs: number;
  updatedAt: string;
  updatedBy: number;
  updatedAs: number;
  deletedAt: string;
  deletedBy: number;
  deletedAs: number;
  restoredAt: string;
  restoredBy: number;
  restoredAs: number;
}