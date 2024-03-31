export interface JobSchedulerModelInterface {
  id: number;
  index: string;
  label: string;
  task: string;
  action: string;
  params: object;
  frequency: string;
  startingAt: string;
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