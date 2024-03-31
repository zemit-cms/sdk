import { AbstractModel } from '../AbstractModel';
import { WorkspaceModelInterface } from './interfaces/WorkspaceModelInterface';

export class WorkspaceModelAbstract extends AbstractModel implements WorkspaceModelInterface {
  id!: number;
  uuid!: null;
  name!: string;
  description!: string;
  icon!: string;
  color!: string;
  status!: string;
  deleted!: string;
  createdAt!: string;
  createdBy!: number;
  createdAs!: number;
  updatedAt!: string;
  updatedBy!: number;
  updatedAs!: number;
  deletedAt!: string;
  deletedAs!: number;
  deletedBy!: number;
  restoredAt!: string;
  restoredBy!: number;
  restoredAs!: number;
}